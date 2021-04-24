import { Clinic } from '@interfaces/clinic.interface';

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
