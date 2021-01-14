import {AccessoryPlugin, API, HAP, Logging, PlatformConfig, StaticPlatformPlugin} from 'homebridge';
import {SonnenBatterieBattery} from './battery-accessory';

import fetch from 'node-fetch';

export class SonnenBatteriePlatform implements StaticPlatformPlugin {

  private readonly log: Logging;
  private readonly hap: HAP;
  private readonly config: PlatformConfig;

  constructor(log: Logging, config: PlatformConfig, api: API) {
    this.log = log;
    this.hap = api.hap;
    this.config = config;

    log.info('SonnenBatterie finished initializing!');
  }

  /*
   * This method is called to retrieve all accessories exposed by the platform.
   * The Platform can delay the response my invoking the callback at a later time,
   * it will delay the bridge startup though, so keep it to a minimum.
   * The set of exposed accessories CANNOT change over the lifetime of the plugin!
   */
  accessories(callback: (foundAccessories: AccessoryPlugin[]) => void): void {
    fetch(this.config.url + '/api/configuration')
      .then(res => res.json())
      .then(sonnenConfiguration => {
        callback([
          new SonnenBatterieBattery(
            this.hap,
            this.log,
            'sonnenBatterie',
            this.config,
            sonnenConfiguration,
          ),
        ]);
      })
      .catch(e => {
        this.log.error(e);
      });
  }

}
