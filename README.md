
# homebridge-sonnenbatterie

(Unofficial) Homebridge Plugin for the sonnenBatterie.

This Plugin is considered to be complete.

If you encounter a bug or want to propose a new feature feel free to open an issue!

If you like this plugin it is possible to donate a "cup of coffee" via Paypal:

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/npluseins)


# Installation
1. Install [Homebridge](https://github.com/nfarina/homebridge): `sudo npm install -g --unsafe-perm homebridge`
2. Install this plugin `sudo npm install -g homebridge-sonnenbatterie`
3. Add this plugin as a platform to your `config.json` file

## Configuration
Inside `config.json` of Homebridge:
```json
...
    "platforms": [
        {
```
Mandatory:
```json
            "platform": "sonnenBatterie",
            "name": "sonnenBatterie",
            "url": "http://192.168.178.55:8080",
```
* `name` can be freely chosen
* `url` needs to be set to the protocol (http), IP-adress and port (usually 8080) of your sonnenBatterie.


# Reference of all available fields in /api/v1/status (not all are currently used in this plugin):

```json
{
  "Apparent_output":356,
  "BackupBuffer":"20",
  "BatteryCharging":true,
  "BatteryDischarging":false,
  "Consumption_Avg":259,
  "Consumption_W":270,                // house consumption
  "Fac":50.018966674804688,           // AC frequency
  "FlowConsumptionBattery":false,
  "FlowConsumptionGrid":false,
  "FlowConsumptionProduction":true,
  "FlowGridBattery":false,
  "FlowProductionBattery":true,
  "FlowProductionGrid":true,
  "GridFeedIn_W":77,
  "IsSystemInstalled":1,
  "OperatingMode":"2",
  "Pac_total_W":-344,
  "Production_W":669,                 // PV production
  "RSOC":32,                          // relative state of charge
  "RemainingCapacity_W":6841,
  "Sac1":356,
  "Sac2":null,
  "Sac3":null,
  "SystemStatus":"OnGrid",
  "Timestamp":"2021-01-13 12:11:07",
  "USOC":26,                          // user state of charge
  "Uac":237,                          // AC voltage
  "Ubat":211                          // battery voltage
}
```