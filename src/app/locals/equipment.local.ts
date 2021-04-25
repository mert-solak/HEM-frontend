import { SortableField } from '@interfaces/equipment.interface';

export const sortableFields: Record<SortableField, string> = {
  name: 'İsime göre',
  createdAt: 'Tarihe göre',
  price: 'Fiyata göre',
  quantity: 'Sayıya göre',
  usageRatio: 'Kullanıma göre',
  receiptDate: 'Temin tarihine göre',
};
