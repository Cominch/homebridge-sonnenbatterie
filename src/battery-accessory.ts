import {
  AccessoryPlugin,
  CharacteristicGetCallback,
  CharacteristicSetCallback,
  CharacteristicValue,
  HAP,
  Logging,
  PlatformConfig,
  Service,
  CharacteristicEventTypes
} from "homebridge";

const fetch = require('node-fetch');

export class SonnenBatterieBattery implements AccessoryPlugin {

  private readonly log: Logging;
  private readonly config: PlatformConfig;

  name: string;
  sonnenConfiguration: Object;

  private readonly batteryService: Service;
  private readonly chargeService: Service;
  private readonly informationService: Service;

  constructor(hap: HAP, log: Logging, name: string, config: PlatformConfig, sonnenConfiguration: Object) {
    this.log = log;
    this.name = name;
    this.config = config;

    this.sonnenConfiguration = sonnenConfiguration;

    this.batteryService = new hap.Service.BatteryService(name);

    // create handlers for required characteristics
    this.batteryService.getCharacteristic(hap.Characteristic.BatteryLevel)
      .on('get', this.handleBatteryLevelGet.bind(this));

    this.batteryService.getCharacteristic(hap.Characteristic.ChargingState)
      .on('get', this.handleChargingStateGet.bind(this));

    this.batteryService.getCharacteristic(hap.Characteristic.StatusLowBattery)
      .on('get', this.handleStatusLowBatteryGet.bind(this));


    // create a new Humidity Sensor service
     this.chargeService = new hap.Service.HumiditySensor(this.name);

    // create handlers for required characteristics
    this.chargeService.getCharacteristic(hap.Characteristic.CurrentRelativeHumidity)
      .on('get', this.handleBatteryLevelGet.bind(this));

    this.informationService = new hap.Service.AccessoryInformation()
      .setCharacteristic(hap.Characteristic.Manufacturer, "Sonnen GmbH")
      .setCharacteristic(hap.Characteristic.Model, this.sonnenConfiguration['ERP_HardwareLine']+' '+this.sonnenConfiguration['ERP_HardwareGeneration'])
      .setCharacteristic(hap.Characteristic.FirmwareRevision, this.sonnenConfiguration['DE_Software'])
      .setCharacteristic(hap.Characteristic.SerialNumber, this.sonnenConfiguration['DE_Ticket_Number']);

    log.info("sonnenBatterie '%s' created!", name);
  }

  /*
   * This method is optional to implement. It is called when HomeKit ask to identify the accessory.
   * Typical this only ever happens at the pairing process.
   */
  identify(): void {
    this.log("Identify!");
  }

  /*
   * This method is called directly after creation of this instance.
   * It should return all services which should be added to the accessory.
   */
  getServices(): Service[] {
    return [
      this.batteryService,
      this.chargeService,
      this.informationService,
    ];
  }

  /**
   * Handle requests to get the current value of the "Battery Level" characteristic
   */
  handleBatteryLevelGet(callback) {
    this.log.debug('Triggered GET BatteryLevel');

    fetch(this.config.url + '/api/v1/status')
      .then(res => res.json())
      .then(status => {
        const currentValue = parseInt(status['USOC']);

        callback(null, currentValue);
      })
      .catch(e => {
        this.log.error(e);
      })
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
      })
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
      })
  }
}
