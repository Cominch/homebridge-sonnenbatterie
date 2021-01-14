import {
  AccessoryPlugin,
  HAP,
  Logging,
  PlatformConfig,
  Service,
} from 'homebridge';

import fetch from 'node-fetch';

export class SonnenBatterieProductionFlow implements AccessoryPlugin {

  private readonly log: Logging;
  private readonly config: PlatformConfig;

  name: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  sonnenConfiguration: Object;

  private readonly batteryService: Service;
  private readonly gridService: Service;

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(hap: HAP, log: Logging, name: string, config: PlatformConfig, sonnenConfiguration: Object) {
    this.log = log;
    this.name = name;
    this.config = config;

    this.sonnenConfiguration = sonnenConfiguration;

    this.batteryService = new hap.Service.Outlet('Battery', 'Battery');

    // create handlers for required characteristics
    this.batteryService.getCharacteristic(hap.Characteristic.On)
      .on('get', this.handleBatteryOnGet.bind(this))
      .on('set', this.handleBatteryOnSet.bind(this));

    this.batteryService.getCharacteristic(hap.Characteristic.OutletInUse)
      .on('get', this.handleBatteryOutletInUseGet.bind(this));

    this.gridService = new hap.Service.Outlet('Grid', 'Grid');

    // create handlers for required characteristics
    this.gridService.getCharacteristic(hap.Characteristic.On)
      .on('get', this.handleGridOnGet.bind(this))
      .on('set', this.handleGridOnSet.bind(this));

    this.gridService.getCharacteristic(hap.Characteristic.OutletInUse)
      .on('get', this.handleGridOutletInUseGet.bind(this));

      

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
      this.gridService,
    ];
  }

  /**
   * Handle requests to get the current value of the "On" characteristic
   */
  handleBatteryOnGet(callback) {
    this.log.debug('Triggered GET On');

    fetch(this.config.url + '/api/v1/status')
      .then(res => res.json())
      .then(status => {
        const currentValue = status['FlowProductionBattery'] === true;

        callback(null, currentValue);
      })
      .catch(e => {
        this.log.error(e);
      });
  }

  /**
   * Handle requests to set the "On" characteristic
   */
  handleBatteryOnSet(value, callback) {
    this.log.debug('Triggered SET On:', value);

    callback(null);
  }

  /**
   * Handle requests to get the current value of the "Outlet In Use" characteristic
   */
  handleBatteryOutletInUseGet(callback) {
    this.log.debug('Triggered GET OutletInUse');

    fetch(this.config.url + '/api/v1/status')
      .then(res => res.json())
      .then(status => {
        const currentValue = status['FlowProductionBattery'] === true;

        callback(null, currentValue);
      })
      .catch(e => {
        this.log.error(e);
      });
  }

  /**
   * Handle requests to get the current value of the "On" characteristic
   */
  handleGridOnGet(callback) {
    this.log.debug('Triggered GET On');

    fetch(this.config.url + '/api/v1/status')
      .then(res => res.json())
      .then(status => {
        const currentValue = status['FlowProductionGrid'] === true;

        callback(null, currentValue);
      })
      .catch(e => {
        this.log.error(e);
      });
  }

  /**
   * Handle requests to set the "On" characteristic
   */
  handleGridOnSet(value, callback) {
    this.log.debug('Triggered SET On:', value);

    callback(null);
  }

  /**
   * Handle requests to get the current value of the "Outlet In Use" characteristic
   */
  handleGridOutletInUseGet(callback) {
    this.log.debug('Triggered GET OutletInUse');

    fetch(this.config.url + '/api/v1/status')
      .then(res => res.json())
      .then(status => {
        const currentValue = status['FlowProductionGrid'] === true;

        callback(null, currentValue);
      })
      .catch(e => {
        this.log.error(e);
      });
  }
}
