import { SortableField, EditableField, ShowableField } from '@interfaces/equipment.interface';

const showableFields: ShowableField[] = ['name', 'clinic', 'price', 'quantity', 'receiptDate', 'usageRatio'];
const editableFields: EditableField[] = ['name', 'clinic', 'price', 'quantity', 'receiptDate', 'usageRatio'];
const sortableFields: SortableField[] = ['name', 'price', 'createdAt', 'quantity', 'receiptDate', 'usageRatio'];

export const equipmentConfig = {
  pageSize: 10,
  showableFields,
  editableFields,
  sortableFields,
  searchDelayMilisecond: 500,
};
