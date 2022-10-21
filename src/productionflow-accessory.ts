import {
  AccessoryPlugin,
  HAP,
  Logging,
  PlatformConfig,
  Service,
} from 'homebridge';

import fetch from 'node-fetch';
import { ISonnenConfiguration } from './contracts/ISonnenConfiguration';
import { ISonnenStatus } from './contracts/ISonnenStatus';

export class SonnenBatterieProductionFlow implements AccessoryPlugin {

  private readonly log: Logging;
  private readonly config: PlatformConfig;

  name: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  sonnenConfiguration: ISonnenConfiguration;

  private readonly gridService: Service;
  private readonly batteryService: Service;
  private readonly consumptionService: Service;

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(hap: HAP, log: Logging, name: string, config: PlatformConfig, sonnenConfiguration: ISonnenConfiguration) {
    this.log = log;
    this.name = name;
    this.config = config;

    this.sonnenConfiguration = sonnenConfiguration;

    this.gridService = new hap.Service.Outlet('To Grid', 'Grid');

    // create handlers for required characteristics
    this.gridService.getCharacteristic(hap.Characteristic.On)
      .on('get', this.handleGridOnGet.bind(this))
      .on('set', this.handleGridOnSet.bind(this));

    this.gridService.getCharacteristic(hap.Characteristic.OutletInUse)
      .on('get', this.handleGridOutletInUseGet.bind(this));

    this.batteryService = new hap.Service.Outlet('To Battery', 'Battery');

    // create handlers for required characteristics
    this.batteryService.getCharacteristic(hap.Characteristic.On)
      .on('get', this.handleBatteryOnGet.bind(this))
      .on('set', this.handleBatteryOnSet.bind(this));

    this.batteryService.getCharacteristic(hap.Characteristic.OutletInUse)
      .on('get', this.handleBatteryOutletInUseGet.bind(this));

    this.consumptionService = new hap.Service.Outlet('To Consumption', 'Consumption');

    // create handlers for required characteristics
    this.consumptionService.getCharacteristic(hap.Characteristic.On)
      .on('get', this.handleConsumptionOnGet.bind(this))
      .on('set', this.handleConsumptionOnSet.bind(this));

    this.consumptionService.getCharacteristic(hap.Characteristic.OutletInUse)
      .on('get', this.handleConsumptionOutletInUseGet.bind(this));


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
      this.gridService,
      this.batteryService,
      this.consumptionService,
    ];
  }

  /**
   * Handle requests to get the current value of the "On" characteristic
   */
  handleGridOnGet(callback) {
    this.log.debug('Triggered GET On');

    fetch(this.config.url + '/api/v1/status')
      .then(res => res.json() as unknown as ISonnenStatus)
      .then(status => {
        const currentValue = status.FlowProductionGrid === true;

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
      .then(res => res.json() as unknown as ISonnenStatus)
      .then(status => {
        const currentValue = status.FlowProductionGrid === true;

        callback(null, currentValue);
      })
      .catch(e => {
        this.log.error(e);
      });
  }

  /**
   * Handle requests to get the current value of the "On" characteristic
   */
  handleBatteryOnGet(callback) {
    this.log.debug('Triggered GET On');

    fetch(this.config.url + '/api/v1/status')
      .then(res => res.json() as unknown as ISonnenStatus)
      .then(status => {
        const currentValue = status.FlowProductionBattery === true;

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
      .then(res => res.json() as unknown as ISonnenStatus)
      .then(status => {
        const currentValue = status.FlowProductionBattery === true;

        callback(null, currentValue);
      })
      .catch(e => {
        this.log.error(e);
      });
  }

  /**
   * Handle requests to get the current value of the "On" characteristic
   */
  handleConsumptionOnGet(callback) {
    this.log.debug('Triggered GET On');

    fetch(this.config.url + '/api/v1/status')
      .then(res => res.json() as unknown as ISonnenStatus)
      .then(status => {
        const currentValue = status.FlowConsumptionProduction === true;

        callback(null, currentValue);
      })
      .catch(e => {
        this.log.error(e);
      });
  }

  /**
   * Handle requests to set the "On" characteristic
   */
  handleConsumptionOnSet(value, callback) {
    this.log.debug('Triggered SET On:', value);

    callback(null);
  }

  /**
   * Handle requests to get the current value of the "Outlet In Use" characteristic
   */
  handleConsumptionOutletInUseGet(callback) {
    this.log.debug('Triggered GET OutletInUse');

    fetch(this.config.url + '/api/v1/status')
      .then(res => res.json() as unknown as ISonnenStatus)
      .then(status => {
        const currentValue = status.FlowConsumptionProduction === true;

        callback(null, currentValue);
      })
      .catch(e => {
        this.log.error(e);
      });
  }
}
