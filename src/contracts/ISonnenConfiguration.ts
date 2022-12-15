/**
 * interface type of the json return values from /api/configuration
 */
export interface ISonnenConfiguration {
    CM_MarketingModuleCapacity: string;
    CN_CascadingRole: string;
    DE_Software: string;
    EM_OperatingMode: string;
    EM_Prognosis_Charging: string;
    EM_RE_ENABLE_MICROGRID: string;
    EM_ToU_Schedule: string;
    EM_USER_INPUT_TIME_ONE: string;
    EM_USER_INPUT_TIME_THREE: string;
    EM_USER_INPUT_TIME_TWO: string;
    EM_USOC: string;
    EM_US_GEN_POWER_SET_POINT: string;
    IC_BatteryModules: string;
    IC_InverterMaxPower_w: string;
    NVM_PfcFixedCosPhi: string;
    NVM_PfcIsFixedCosPhiActive: string;
    NVM_PfcIsFixedCosPhiLagging: string;
    SH_HeaterOperatingMode: string;
    SH_HeaterTemperatureMax: string;
    SH_HeaterTemperatureMin: string;
}
