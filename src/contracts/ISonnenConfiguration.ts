/**
 * interface type of the json return values from /api/configuration
 */
export interface ISonnenConfiguration {
    BD_Active: string;
    CM_BackendDelay_s: string;
    CM_Core_API: string;
    CM_Core_API_Debug: string;
    CM_Core_API_Event_Log_Buffering: string;
    CM_Core_API_Events_Enable_Sending: string;
    CM_Core_API_Events_Endpoint: string;
    CM_DB_Logs_Flag: string;
    CM_Disable_BatterySpecialStatus: string;
    CM_HourlyEventsCleanup: string;
    CM_Household_Fuse_Current: string;
    CM_IEEE2030_LFDI: string;
    CM_IEEE2030_PIN: string;
    CM_IEEE2030_Registration_ID: string;
    CM_IEEE2030_SFDI: string;
    CM_IEEE2030_Utility_URL: string;
    CM_MarketingModuleCapacity: string;
    CM_OnBootEventsCleanup: string;
    CM_Sync_Rows: string;
    CM_Sync_Time_Sec: string;
    CM_Sync_Time_Sec_Max: string;
    CM_URL_Prefix: string;
    CN_CascadingAlgorithm: string;
    CN_CascadingRanking_RecalculateTimeSeconds: string;
    CN_CascadingRole: string;
    CN_Environment: string;
    CN_MaxNodeCount: string;
    CN_MinSoftwareVersion: string;
    CN_Nodes: string;
    CN_NominalStackPower: string;
    CN_ProPairingTokenInUse: string;
    CN_RankingWeights: string;
    CN_Slave1_IP_Address: string;
    CN_Slave2_IP_Address: string;
    DE_Hardware_Version: string;
    DE_Has_Display: string;
    DE_Has_Zwave: string;
    DE_Software: string;
    DE_System_Brand: string;
    DE_System_Family: string;
    DE_System_Type: string;
    DE_Ticket_Number: string;
    DM_BrightnessActive: string;
    DM_BrightnessInactive: string;
    DM_OnboardingCompleted: string;
    DM_ShutdownEnabled: string;
    EM_ATS: string;
    EM_ATS_Turn_Time_sec: string;
    EM_AutomaticDetectionOnDeviceError: string;
    EM_Battery: string;
    EM_Battery_Charge_Reduction_W: string;
    EM_CHP_Max_SOC: string;
    EM_CHP_Min_SOC: string;
    EM_CHP_Power_w: string;
    EM_DataLogTime_sec: string;
    EM_FREQUENCY_SHIFT_VALUE: string;
    EM_FailSave: string;
    EM_FullchargeDeadline: string;
    EM_GFI_AM_C: string;
    EM_GFI_AP: string;
    EM_GFI_AP_Buffer: string;
    EM_GFI_AP_w: string;
    EM_GFI_Connection: string;
    EM_GFI_FRD_sec: string;
    EM_GFI_PVP_wp: string;
    EM_GFI_R0: string;
    EM_GFI_R1: string;
    EM_GFI_R2: string;
    EM_GFI_R3: string;
    EM_GFI_RS_RD_sec: string;
    EM_GFI_ST_sec: string;
    EM_GFI_T_sec: string;
    EM_Hardlimit: string;
    EM_IgnoreMarketingLimit: string;
    EM_IsExportlimitActive: string;
    EM_IsHardlimitActive: string;
    EM_Last_OperatingMode: string;
    EM_LimitFullChargeRequestMaxPower: string;
    EM_LogLevel: string;
    EM_Measurement_Simulation: string;
    EM_Module_Extension_RSOC: string;
    EM_OffGrid_Monitor_Time_sec: string;
    EM_Offset_Charge: string;
    EM_Offset_Discharge: string;
    EM_OperatingMode: string;
    EM_PSThreshold_w: string;
    EM_Power_Meter_Setup: string;
    EM_Prognosis_Charging: string;
    EM_RE_ENABLE_MICROGRID: string;
    EM_RSOCMax: string;
    EM_RSOCMin: string;
    EM_RemoteCommandTimeout: string;
    EM_SIM_FeedIn_Value: string;
    EM_SIM_PV_Reduction: string;
    EM_SetpointLogEnabled: string;
    EM_SetpointTime_sec: string;
    EM_SetpointWindow: string;
    EM_Setpoint_Percentage: string;
    EM_Simulation_Consumption_Factor: string;
    EM_Simulation_PV_Factor: string;
    EM_Simulation_Step: string;
    EM_Softlimit: string;
    EM_ToU_HighTariffMigrated: string;
    EM_ToU_Schedule: string;
    EM_ToU_SystemTime: string;
    EM_USER_INPUT_TIME_ONE: string;
    EM_USER_INPUT_TIME_THREE: string;
    EM_USER_INPUT_TIME_TWO: string;
    EM_USOC: string;
    EM_USOCMin: string;
    EM_US_GENRATOR_TYPE: string;
    EM_US_GEN_INPUT_MODE: string;
    EM_US_GEN_POWER_SET_POINT: string;
    EM_US_GRID_ENABLED: string;
    EM_US_HIGH_TARIFF_THRESHOLD: string;
    EM_US_LOW_TARIFF_CHARGE_TIME: string;
    EM_US_PEAK_HOUR_END_TIME: string;
    EM_US_PEAK_HOUR_START_TIME: string;
    EM_US_SELF_CONSUMPTION: string;
    EM_US_TOU: string;
    EM_US_ZERO_EXPORT_END: string;
    EM_US_ZERO_EXPORT_MODE: string;
    EM_US_ZERO_EXPORT_START: string;
    ERP_ArticleName: string;
    ERP_ArticleNumber: string;
    ERP_BatteryCellType: string;
    ERP_CoreMarket: string;
    ERP_HardwareGeneration: string;
    ERP_HardwareLine: string;
    ERP_Has_Display: string;
    ERP_InverterType: string;
    ERP_ProductionDate: string;
    ERP_SystemColor: string;
    GL_Language: string;
    IC_AutoDetectBms: string;
    IC_AutoDetectInverter: string;
    IC_BMSType: string;
    IC_BatteryModules: string;
    IC_DummyInverter: string;
    IC_Firmware_Version: string;
    IC_HW_Configuration: string;
    IC_InverterMaxPower_w: string;
    IC_InverterPowerLimit_w: string;
    IC_InverterSubtype: string;
    IC_InverterType: string;
    IC_Inverter_FW_File_Path: string;
    IC_Inverter_FW_Version: string;
    IC_Inverter_Hybrid: string;
    IN_Address1: string;
    IN_Address2: string;
    IN_BACKUP_BOX_AVAILABLE: string;
    IN_City: string;
    IN_Country: string;
    IN_Date: string;
    IN_EarthingSystem: string;
    IN_Email: string;
    IN_EmailConfirm: string;
    IN_FEATURE_CHP: string;
    IN_FEATURE_MICROGRID: string;
    IN_FEATURE_PROTECT: string;
    IN_FEATURE_SCR: string;
    IN_FEATURE_TOU: string;
    IN_FLAT: string;
    IN_FLAT_CONCEPT: string;
    IN_FLAT_CONCEPT_DESCRIPTION: string;
    IN_FLAT_CONTRACT: string;
    IN_FLAT_OFFICIAL: string;
    IN_FLAT_PRODUCTION_METER: string;
    IN_FLAT_STORAGEPASSNR: string;
    IN_FirstName: string;
    IN_Gender: string;
    IN_IN_Certificate: string;
    IN_IN_Company: string;
    IN_IN_Email: string;
    IN_IN_FirstName: string;
    IN_IN_Gender: string;
    IN_IN_LastName: string;
    IN_IN_LegalConfirmation: string;
    IN_Inverter_Country_Code: string;
    IN_Inverter_Grid_Code: string;
    IN_LastName: string;
    IN_LocalAPIToken: string;
    IN_LocalCommandApiActive: string;
    IN_OwnerNotification: string;
    IN_PROTECT_ACTIVE: string;
    IN_PROTECT_CODE: string;
    IN_PROTECT_SERIAL: string;
    IN_Password: string;
    IN_Phone: string;
    IN_STANDBY_MODE_REQUESTED: string;
    IN_State: string;
    IN_SystemInstalled: string;
    IN_TZUTCOffset: string;
    IN_Time: string;
    IN_TimeZone: string;
    IN_ToUHighTariffWindows: string;
    IN_UpdateDuringOffgridOperation: string;
    IN_ZipCode: string;
    IN_segnale_esterno_auto: string;
    ISTR_TestResult_FMax81S1: string;
    ISTR_TestResult_FMax81S2: string;
    ISTR_TestResult_FMin81S1: string;
    ISTR_TestResult_FMin81S2: string;
    ISTR_TestResult_VMax59S1: string;
    ISTR_TestResult_VMax59S2: string;
    ISTR_TestResult_VMin27S1: string;
    ISTR_TestResult_VMin27S2: string;
    ISTST_DateTime: string;
    ISTS_AutoTest_Flags: string;
    ISTS_FAC: string;
    ISTS_Flags_Of_Test_Results: string;
    ISTS_Fmax81S1: string;
    ISTS_Fmax81S2: string;
    ISTS_Fmin81S1: string;
    ISTS_Fmin81S2: string;
    ISTS_ResultTime_FMax81S1: string;
    ISTS_ResultTime_FMax81S2: string;
    ISTS_ResultTime_FMin81S1: string;
    ISTS_ResultTime_FMin81S2: string;
    ISTS_ResultTime_VMax59S1: string;
    ISTS_ResultTime_VMax59S2: string;
    ISTS_ResultTime_VMin27S1: string;
    ISTS_ResultTime_VMin27S2: string;
    ISTS_Test_State: string;
    ISTS_VAC: string;
    ISTS_VMax59S1: string;
    ISTS_VMax59S2: string;
    ISTS_Vmin27S1: string;
    ISTS_Vmin27S2: string;
    MM_CommunicatorType: string;
    MM_MeasurementInterval_ms: string;
    MM_Meter_Modbus_Address: string;
    MM_Meter_Modbus_Address2: string;
    MM_Meter_Modbus_RtsPinNum: string;
    MM_Meter_Multi_AddressList: string;
    MM_Meter_Multi_Directions: string;
    MM_Meter_Multi_MultiplicationFactors: string;
    MM_Meter_Multi_TypeList: string;
    MM_Meter_Type: string;
    MM_Serial_BaudRate: string;
    MM_Serial_DataBit: string;
    MM_Serial_Parity: string;
    MM_Serial_Port: string;
    MM_Serial_StopBit: string;
    MOD_Port1: string;
    MOD_Port1_BaudRate: string;
    MOD_Port1_DataBit: string;
    MOD_Port1_Parity: string;
    MOD_Port1_StopBit: string;
    NVM_BUZZER_ACTIVE: string;
    NVM_BmsSecondsSinceFullcharge: string;
    NVM_BmsSerialnumbers: string;
    NVM_DC_MODULE_DC_OVERVOLTAGE_PROTECTION_LIMIT: string;
    NVM_DC_MODULE_DC_VOLTAGE_0_PERCENT_POWER: string;
    NVM_DC_MODULE_DC_VOLTAGE_100_PERCENT_POWER: string;
    NVM_DC_MODULE_MPPT_FREQUENCY: string;
    NVM_DC_MODULE_MPPT_STEP: string;
    NVM_DEVICE_TO_UPDATE: string;
    NVM_ELECTROLYTE_LEAKAGE_ALARM_ENABLED: string;
    NVM_EMERGENCY_ALARM_ACTIVE: string;
    NVM_EclipseBrightness_percent: string;
    NVM_EepromVersionMajor: string;
    NVM_EepromVersionMinor: string;
    NVM_EepromVersionSubminor: string;
    NVM_FAN_START_BMS_TEMPERATURE: string;
    NVM_FAN_START_INVERTER_TEMPERATURE: string;
    NVM_FAN_START_SPREE_TEMPERATURE: string;
    NVM_FAN_STOP_BMS_TEMPERATURE: string;
    NVM_FAN_STOP_INVERTER_TEMPERATURE: string;
    NVM_FAN_STOP_SPREE_TEMPERATURE: string;
    NVM_HwVersionMajor: string;
    NVM_HwVersionMinor: string;
    NVM_IsDigitalInputAS4777Active: string;
    NVM_IsProtectActivated: string;
    NVM_OffgridAbsolutePeakPowerLimit_W: string;
    NVM_OffgridAutomaticTransferSwitchDelay: string;
    NVM_OffgridContiniousPowerLimitTime_s: string;
    NVM_OffgridContiniousPowerLimit_W: string;
    NVM_OffgridFrequencyshiftChargeCurrent_LowLimit: string;
    NVM_OffgridFrequencyshiftChargeCurrent_UpLimit: string;
    NVM_OffgridFrequencyshiftMaxCellTemp_LowLimit: string;
    NVM_OffgridFrequencyshiftMaxCellTemp_UpLimit: string;
    NVM_OffgridFrequencyshiftMaxCellVolt_UpLimit: string;
    NVM_OffgridFrequencyshiftMinCellTemp_LowLimit: string;
    NVM_OffgridFrequencyshiftMinCellTemp_UpLimit: string;
    NVM_OffgridFrequencyshiftSoc_LowLimit: string;
    NVM_OffgridFrequencyshiftSoc_UpLimit: string;
    NVM_OffgridIslandingReEnableMinSOC: string;
    NVM_OffgridMinimalOperationSOC: string;
    NVM_OffgridNominalPower_W: string;
    NVM_OffgridOverpowerRetryTime_s: string;
    NVM_OffgridPeakPowerLimitTime_s: string;
    NVM_OffgridPeakPowerLimit_W: string;
    NVM_P_U_PPoint1: string;
    NVM_P_U_PPoint2: string;
    NVM_P_U_PPoint3: string;
    NVM_P_U_PPoint4: string;
    NVM_P_U_UPoint1: string;
    NVM_P_U_UPoint2: string;
    NVM_P_U_UPoint3: string;
    NVM_P_U_UPoint4: string;
    NVM_P_VS_F_ENABLED: string;
    NVM_P_VS_U_ENABLED: string;
    NVM_PfcCosPhi: string;
    NVM_PfcCosPhiType: string;
    NVM_PfcFixedCosPhi: string;
    NVM_PfcIsFixedCosPhiActive: string;
    NVM_PfcIsFixedCosPhiLagging: string;
    NVM_PfcLockInVoltage: string;
    NVM_PfcLockOutVoltage: string;
    NVM_PfcNrOfPoints: string;
    NVM_PfcPEmax: string;
    NVM_PfcPowerRatio: string;
    NVM_PfcQFix: string;
    NVM_PfcQUReactionTime: string;
    NVM_REINIT_STATUS: string;
    NVM_Serialnumber: string;
    NVM_Ticketnumber: string;
    NVM_Timestamp: string;
    NVM_VendorName: string;
    SH_ControllerPort: string;
    SH_DataTransmit_sec: string;
    SH_Enabled: string;
    SH_HeaterEnabled: string;
    SH_HeaterOperatingMode: string;
    SH_HeaterTemperatureMax: string;
    SH_HeaterTemperatureMin: string;
    SH_SCR_HoldingTime_s: string;
    SH_SCR_Threshould_w: string;
    SH_StatusReadErrorsAllowed: string;
    SH_ZWave_PairingTimeout_ms: string;
    SH_ZWave_UnpairingTimeout_ms: string;
    SM_IC_LogConfig: string;
    SM_IEEE2030_GridSupportMode: string;
    SM_LogLevel: string;
    SYSM_LogConfig: string;
    SYS_IcCommWatchdog: string;
    TAF_Configuration: string;
    VPP_RSOCMax: string;
    VPP_RSOCMax_Limit: string;
    VPP_RSOCMin: string;
    VPP_RSOCMin_Limit: string;
}