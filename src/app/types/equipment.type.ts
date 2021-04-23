import { Clinic } from 'app/types/clinic.type';

export interface Equipment {
  id: number;
  name: string;
  quantity: number;
  price: number;
  usageRatio: number;
  receiptDate?: string;
  clinicId: number;
  clinic: Clinic;
  createdAt: string;
  updatedAt: string;
}
