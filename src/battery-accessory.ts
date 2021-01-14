import {
  AccessoryPlugin,
  HAP,
  Logging,
  PlatformConfig,
  Service,
} from 'homebridge';

import fetch from 'node-fetch';

export class SonnenBatterieBattery implements AccessoryPlugin {

  private readonly log: Logging;
  private readonly config: PlatformConfig;

  name: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  sonnenConfiguration: Object;

  private readonly batteryService: Service;
  private readonly chargeService: Service;
  private readonly autarkyService: Service;
  private readonly solarSurplusService: Service;
  private readonly informationService: Service;

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(hap: HAP, log: Logging, name: string, config: PlatformConfig, sonnenConfiguration: Object) {
    this.log = log;
    this.name = name;
    this.config = config;

    this.sonnenConfiguration = sonnenConfiguration;

    this.batteryService = new hap.Service.BatteryService(name);

    // create handlers for required characteristics
    this.batteryService.getCharacteristic(hap.Characteristic.BatteryLevel)
      .on('get', this.handleChargeOnGet.bind(this));

    this.batteryService.getCharacteristic(hap.Characteristic.ChargingState)
      .on('get', this.handleChargingStateGet.bind(this));

    this.batteryService.getCharacteristic(hap.Characteristic.StatusLowBattery)
      .on('get', this.handleStatusLowBatteryGet.bind(this));


    // create a new Humidity Sensor service
    this.chargeService = new hap.Service.Lightbulb('Charge');

    // create handlers for required characteristics
    this.chargeService.getCharacteristic(hap.Characteristic.On)
      .on('get', this.handleChargingOnGet.bind(this))
      .on('set', this.handleChargingOnSet.bind(this));

    // create handlers for required characteristics
    this.chargeService.getCharacteristic(hap.Characteristic.Brightness)
      .on('get', this.handleChargeOnGet.bind(this));

    // create a new Motion Sensor service
    this.autarkyService = new hap.Service.MotionSensor('Autarky');

    // create handlers for required characteristics
    this.autarkyService.getCharacteristic(hap.Characteristic.MotionDetected)
      .on('get', this.handleAutarkyDetectedGet.bind(this));

    // create a new Motion Sensor service
    this.solarSurplusService = new hap.Service.OccupancySensor('Surplus');

    // create handlers for required characteristics
    this.solarSurplusService.getCharacteristic(hap.Characteristic.OccupancyDetected)
      .on('get', this.handleSurplusDetectedGet.bind(this));

    this.informationService = new hap.Service.AccessoryInformation()
      .setCharacteristic(hap.Characteristic.Manufacturer, 'Sonnen GmbH')
      .setCharacteristic(
        hap.Characteristic.Model,
        this.sonnenConfiguration['ERP_HardwareLine'] + ' ' + this.sonnenConfiguration['ERP_HardwareGeneration'],
      )
      .setCharacteristic(hap.Characteristic.FirmwareRevision, this.sonnenConfiguration['DE_Software'])
      .setCharacteristic(hap.Characteristic.SerialNumber, this.sonnenConfiguration['DE_Ticket_Number']);

    log.info('sonnenBatterie \'%s\' created!', name);
  }

  /*
   * This method is optional to implement. It is called when HomeKit ask to identify the accessory.
   * Typical this only ever happens at the pairing process.
   */
  identify(): void {
    this.log('Identify!');
  }

  /*
   * This method is called directly after creation of this instance.
   * It should return all services which should be added to the accessory.
   */
  getServices(): Service[] {
    return [
      this.batteryService,
      this.chargeService,
      this.autarkyService,
      this.solarSurplusService,
      this.informationService,
    ];
  }

  /**
   * Handle requests to get the current value of the "Battery Level" characteristic
   */
  handleChargeOnGet(callback) {
    this.log.debug('Triggered GET BatteryLevel');

    fetch(this.config.url + '/api/v1/status')
      .then(res => res.json())
      .then(status => {
        const currentValue = parseInt(status['USOC']);

        callback(null, currentValue);
      })
      .catch(e => {
        this.log.error(e);
      });
  }

  /**
   * Handle requests to set the "On" characteristic
   */
  handleChargingOnGet(callback) {
    this.log.debug('Triggered GET Charging');

    const currentValue = true;

    callback(null, currentValue);
  }

  /**
   * Handle requests to set the "On" characteristic
   */
  handleChargingOnSet(value, callback) {
    this.log.debug('Triggered SET On:', value);

    callback(null);
  }


  /**
   * Handle requests to get the current value of the "Charging State" characteristic
   */
  handleChargingStateGet(callback) {
    this.log.debug('Triggered GET ChargingState');

    fetch(this.config.url + '/api/v1/status')
      .then(res => res.json())
      .then(status => {
        const currentValue = status['BatteryCharging'] === true;

        callback(null, currentValue);
      })
      .catch(e => {
        this.log.error(e);
      });
  }


  /**
   * Handle requests to get the current value of the "Status Low Battery" characteristic
   */
  handleStatusLowBatteryGet(callback) {
    this.log.debug('Triggered GET StatusLowBattery');

    fetch(this.config.url + '/api/v1/status')
      .then(res => res.json())
      .then(status => {
        const currentCharge = parseInt(status['USOC']);
        const backupBufferValue = parseInt(status['BackupBuffer']);

        const currentValue = currentCharge - backupBufferValue <= 0;

        callback(null, currentValue);
      })
      .catch(e => {
        this.log.error(e);
      });
  }

  /**
   * Handle requests to get the current value of the "Motion Detected" characteristic
   */
  handleAutarkyDetectedGet(callback) {
    this.log.debug('Triggered GET MotionDetected');

    fetch(this.config.url + '/api/v1/status')
      .then(res => res.json())
      .then(status => {
        const gridFeedIn_W = parseInt(status['GridFeedIn_W']);

        const currentValue = gridFeedIn_W > -50;

        //const currentValue = status['FlowConsumptionGrid'] === false;

        callback(null, currentValue);
      })
      .catch(e => {
        this.log.error(e);
      });
  }

  /**
   * Handle requests to get the current value of the "Motion Detected" characteristic
   */
  handleSurplusDetectedGet(callback) {
    this.log.debug('Triggered GET MotionDetected');

    fetch(this.config.url + '/api/v1/status')
      .then(res => res.json())
      .then(status => {
        const production_W = parseInt(status['Production_W']);
        const consumption_W = parseInt(status['Consumption_W']);


        const currentValue = production_W >= consumption_W;

        callback(null, currentValue);
      })
      .catch(e => {
        this.log.error(e);
      });
  }
}
