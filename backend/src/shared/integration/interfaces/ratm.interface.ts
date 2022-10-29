export interface RatmBranch {
  id: string;
  name_ar: string;
  name_en: string;
}

export interface RatmResponse {
  success: boolean;
  message: string;
  data: RatmBranch[];
}
