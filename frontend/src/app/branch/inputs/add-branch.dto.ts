export interface AddBranchDto {
  merchantId: number;
  arName: string;
  enName: string;
  longitude: number;
  latitude: number;
  managerName?: string;
  arDistrict?: string;
  enDistrict?: string;
  managerPhoneNumber?: string;
}
