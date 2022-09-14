export interface MerchantModel {
  id: string;
  name: string;
  name_ar: string;
  description: string;
  description_ar: string;
  email: string;
  brandKey: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  pos: {
    id: number;
    type: string;
  };
  category: {
    id: number;
    name: string;
  };
}
