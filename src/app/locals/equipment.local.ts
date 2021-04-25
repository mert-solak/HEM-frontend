import { ShowableField, SortableField } from '@interfaces/equipment.interface';

export const sortableFields: Record<SortableField, string> = {
  name: 'İsim',
  createdAt: 'Tarih',
  price: 'Fiyat',
  quantity: 'Sayı',
  usageRatio: 'Kullanım',
  receiptDate: 'Temin tarihi',
};

export const showableFields: Record<ShowableField, string> = {
  name: 'İsim',
  price: 'Fiyat',
  quantity: 'Sayı',
  usageRatio: 'Kullanım %',
  receiptDate: 'Temin tarihi',
  clinic: 'Klinik',
};
