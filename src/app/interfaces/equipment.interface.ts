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

export type SortOrder = 'ASC' | 'DESC';

export type SearchableField = keyof Pick<Equipment, 'name' | 'price' | 'quantity' | 'usageRatio' | 'receiptDate'>;

export type SortableField = keyof Pick<
  Equipment,
  'name' | 'createdAt' | 'price' | 'quantity' | 'receiptDate' | 'usageRatio'
>;

export type EditableField = keyof Pick<
  Equipment,
  'name' | 'price' | 'quantity' | 'receiptDate' | 'usageRatio' | 'clinic'
>;

export type ShowableField = keyof Pick<
  Equipment,
  'name' | 'clinic' | 'price' | 'quantity' | 'receiptDate' | 'usageRatio'
>;

export interface EquipmentLookupResult {
  rows: Equipment[];
  count: number;
}
export interface EquipmentLookupInput {
  limit?: number;
  offset?: number;
  sortBy?: SortableField;
  sortOrder?: SortOrder;
  search?: SearchableField[];
}

export interface EquipmentGetInput {
  id: number;
}
export type EquipmentGetResult = Equipment;

export interface EquipmentEditInput extends Partial<Equipment> {
  id: number;
}
export type EquipmentEditResult = Equipment;

export interface EquipmentDeleteInput {
  id: number;
}
export type EquipmentDeleteResult = undefined;

export interface EquipmentAddInput {
  id: number;
}
export type EquipmentAddResult = Equipment;
