import { SortableField } from '@interfaces/clinic.interface';

export const sortableFields: Record<Exclude<SortableField, 'updatedAt'>, string> = {
  name: 'İsime göre',
  createdAt: 'Tarihe göre',
};
