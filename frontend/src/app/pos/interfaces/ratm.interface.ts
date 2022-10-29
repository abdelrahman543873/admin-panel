export interface RatmBranch {
  id: string;
  name_ar: string;
  name_en: string;
}

export interface RatmDevice {
  id: string;
  name_ar: string;
  name_en: string;
  branch_id: string;
}

export interface RatmResponse {
  success: boolean;
  message: string;
  data: RatmBranch[];
}

export interface RatmDeviceResponse {
  success: boolean;
  message: string;
  data: RatmDevice[];
}
