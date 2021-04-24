import { Equipment } from 'app/interfaces/equipment.interface';

export interface Clinic {
  id: number;
  name: string;
  equipments: Equipment[];
  createdAt: string;
  updatedAt: string;
}

export type SortOrder = 'ASC' | 'DESC';

export type SearchableField = keyof Pick<Clinic, 'name' | 'createdAt' | 'updatedAt'>;

export type SortableField = keyof Pick<Clinic, 'name' | 'createdAt' | 'updatedAt'>;

export interface ClinicLookupResult {
  rows: Clinic[];
  count: number;
}

export interface ClinicLookupInput {
  limit?: number;
  offset?: number;
  sortBy?: SortableField;
  sortOrder?: SortOrder;
  search?: SearchableField[];
}
