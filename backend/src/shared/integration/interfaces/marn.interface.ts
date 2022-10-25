export interface MarnResponse {
  Locations: { LocationKey: string }[];
  ResponseCode: string;
  ResponseMessages: [];
  ExceptionObj: null;
  IsSuccessfull: boolean;
}

export interface MarnDevicesResponse {
  DevicesData: [
    {
      DeviceID: number;
      DeviceName: string;
      DeviceType: string;
      DeviceRefCode: string;
    },
  ];
  ResponseCode: string;
  ResponseMessages: [string];
  ExceptionObj: null;
  IsSuccessfull: boolean;
}
