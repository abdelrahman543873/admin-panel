export class UpdateMerchantDto {
  enName?: string;
  phoneNumber?: string;
  arName?: string;
  enDescription?: string;
  arDescription?: string;
  email?: string;
  accessToken?: string;
  brandKey?: string;
  pos?: number;
  password?: string;
  category?: number;
  file?: File;
  id!: number;
}
