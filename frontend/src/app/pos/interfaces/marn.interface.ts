export interface MarnBranchInterface {
  LocationKey: string;
  Name: string;
  Descripiton: string;
  Address: string;
  ContactNo: string;
  Email: string;
  Open_Time: string;
  Close_Time: string;
  DeliveryServices: null;
  DeliveryCharges: number;
  DeliveryTime: string;
  MinOrderAmount: number;
  Longitude: string;
  Latitude: string;
  City: {
    Name: string;
    CountryCode: string;
  };
  Country: {
    Code: string;
    Name: string;
    Continent: string;
    Region: string;
    Currency: string;
    Curr_Code: string;
  };
  TimeZone: {
    BaseUtc: number;
    DisplayName: string;
  };
  PriceSettingsAndTaxs: {
    IsPriceIncludeTaxes: boolean;
    Taxs: [];
  };
  OrderTypes: [
    {
      ID: number;
      Name: string;
      IsAllowed: number;
    },
  ];
  Floors: [];
}

export interface MarnDeviceResponse {
  DeviceID: number;
  DeviceName: string;
  DeviceType: string;
  DeviceRefCode: string;
}
