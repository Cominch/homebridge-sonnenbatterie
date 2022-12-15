
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
            "url": "http://<system-ip>",
            "token": "ef667a1c-8bb0-4441-8d0e-a769d78f2ff7", // example
            "model": "eco 8.0 DE 9010 ND",
            "serial": "12345"
```

* `name` can be freely chosen
* `url` needs to be set to the protocol (http), IP-address and port (usually 8080) of your sonnenBatterie.
* `token` Since the firmware version 1.7. to get configuration details you need to deliver an auth token via the header.
* `model` Check your system overview via <http://system-ip/dash/system> and enter your model. Fallback is 'unknown'
* `serial` Check your system overview via <http://system-ip/dash/system> and enter your serial number. Fallback is 'unknown'

# Reference of all available fields in /api/v2/status (not all are currently used in this plugin)

```json
{
  "Apparent_output": 96,
  "BackupBuffer": "0",
  "BatteryCharging": false,
  "BatteryDischarging": false,
  "Consumption_W": 0,
  "Fac": 50.0239143371582,
  "FlowConsumptionBattery": false,
  "FlowConsumptionGrid": false,
  "FlowConsumptionProduction": false,
  "FlowGridBattery": false,
  "FlowProductionBattery": false,
  "FlowProductionGrid": false,
  "GridFeedIn_W": -3,
  "IsSystemInstalled": 1,
  "OperatingMode": "2",
  "Pac_total_W": 7,
  "Production_W": 0,
  "RSOC": 21,
  "Sac1": 96,
  "Sac2": null,
  "Sac3": null,
  "SystemStatus": "OnGrid",
  "Timestamp": "2020-03-26 17:10:06",
  "USOC": 12,
  "Uac": 238,
  "Ubat": 209,
  "dischargeNotAllowed": false,
  "generator_autostart": false
}
```

## Explanation

 **Variable**                  | **Example Value**     | **Unit**         | **Description**                                                                                                                                                          | **Data type**  
-------------------------------|-----------------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------
 **Apparent\_output**          | 226                   | VA, volt\-ampere | All AC output of apparent power in VA                                                                                                                                    | Integer
 **BackupBuffer**              | 0                     | %, percentage    | Backup\-buffer in percentage that is set on the system\.                                                                                                                 | Integer
 **BatteryCharging**           | false                 | \-               | Boolean that indicates the charge status\. True if charging                                                                                                              | Boolean
 **BatteryDischarging**        | false                 | \-               | Boolean that indicates the discharge status\. True if discharging                                                                                                        | Boolean
 **Consumption\_Avg**          | 223                   | W, watt          | House consumption in watts, average over the last 60s                                                                                                                    | Integer
 **Consumption\_W**            | 232                   | W, watt          | House consumption in watts, direct measurement                                                                                                                           | Integer
 **Fac**                       | 49\.999000549316400   | Hz, hertz        | AC frequency in hertz                                                                                                                                                    | Float
 **FlowConsumptionBattery**    | false                 | \-               | Boolean that indicates the energy flow at the installation site\. True if battery feeds the consumption                                                                  | Boolean
 **FlowConsumptionGrid**       | true                  | \-               | Boolean that indicates the energy flow at the installation site\. True if grid feeds the consumption                                                                     | Boolean
 **FlowConsumptionProduction** | true                  | \-               | Boolean that indicates the energy flow at the installation site\. True if production feeds the consumption | Boolean
 **FlowGridBattery**           | false                 | \-               | Boolean that indicates the energy flow at the installation site\. True if battery is charging from grid                                                                  | Boolean
 **FlowProductionBattery**     | false                 | \-               | Boolean that indicates the energy flow at the installation site\. True if production is charging the battery | Boolean
 **FlowProductionGrid**        | false                 | \-               | Boolean that indicates the energy flow at the installation site\. True if production feeds into the grid                                                                 | Boolean
 **GridFeedIn\_W**             | \-208                 | W, watt          | Grid Feed in negative is consumption and positive is feed in                                                                                                             | Integer
 **IsSystemInstalled**         | 1                     | \-               | System is installed or not                                                                                                                                               | Integer
 **OperatingMode**             | 2                     | \-               | Operating mode that is set on the system: <ul><li>1: Manual charging or discharging via API</li><li>2: Automatic Self Consumption\. Default</li></ul>| Integer
 **Pac\_total\_W**             | \-5                   | W, watt          | AC Power greater than ZERO is discharging Inverter AC Power less than ZERO is charging                                                                                   | Signed Integer
 **Production\_W**             | 28                    | W, watt          | PV production in watts                                                                                                                                                   | Integer
 **RSOC**                      | 4                     | %, percentage    | Relative state of charge                                                                                                                                                 | Integer
 **RemainingCapacity\_W**      | 674                   | Wh               | Remaining capacity based on RSOC                                                                                                                                         | Integer
 **Sac1**                      | 75                    | VA, volt\-ampere | Output of apparent power in VA on Phase 1                                                                                                                                | Integer
 **Sac2**                      | 75                    | VA, volt\-ampere | Output of apparent power in VA on Phase 2                                                                                                                                | Integer
 **Sac3**                      | 76                    | VA, volt\-ampere | Output of apparent power in VA on Phase 3                                                                                                                                | Integer
 **SystemStatus**              | OnGrid                | \-               | String that indicates if the system is connected to the grid \(“OnGrid”\) or disconnected \(“OffGrid”\)                                                                  | String
 **Timestamp**                 | 2020\-12\-10 11:26:01 | \-               | Local system time                                                                                                                                                        | String
 **USOC**                      | 0                     | %, percentage    | User state of charge                                                                                                                                                     | Integer
 **Uac**                       | 230                   | V, volt          | AC voltage in volts                                                                                                                                                      | Integer
 **Ubat**                      | 50                    | V, volt          | Battery voltage in volts                                                                                                                                                 | Integer
 **dischargeNotAllowed**       | false                 | \-               | Boolean that indicates the discharge status\. True if no discharge allowed, based on battery maintenance                                                                 | Boolean
 **generator\_autostart**      | false                 | \-               | Boolean that indicates the autostart setting of the generator\.                                                                                                          | Boolean
