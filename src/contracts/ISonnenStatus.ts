export interface ISonnenStatus {
    Apparent_output: number;
    BackupBuffer: string;
    BatteryCharging: boolean;
    BatteryDischarging: boolean;
    Consumption_Avg: number;
    Consumption_W: number;
    Fac: number;
    FlowConsumptionBattery: boolean;
    FlowConsumptionGrid: boolean;
    FlowConsumptionProduction: boolean;
    FlowGridBattery: boolean;
    FlowProductionBattery: boolean;
    FlowProductionGrid: boolean;
    GridFeedIn_W: number;
    IsSystemInstalled: number;
    OperatingMode: string;
    Pac_total_W: number;
    Production_W: number;
    RSOC: number;
    RemainingCapacity_Wh: number;
    Sac1: number;
    Sac2: number;
    Sac3: number;
    SystemStatus: string;
    Timestamp: Date;  //2022-10-21 22:41:19
    USOC: number;
    Uac: number;
    Ubat: number;
    dischargeNotAllowed: boolean;
    generator_autostart: boolean;
}
