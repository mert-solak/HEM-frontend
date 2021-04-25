import { Clinic } from '@interfaces/clinic.interface';
import { SortableField, EditableField, ShowableField } from '@interfaces/equipment.interface';

const showableFields: ShowableField[] = ['name', 'clinic', 'price', 'quantity', 'receiptDate', 'usageRatio'];
const editableFields: EditableField[] = ['name', 'clinic', 'price', 'quantity', 'receiptDate', 'usageRatio'];
const sortableFields: SortableField[] = ['name', 'price', 'createdAt', 'quantity', 'receiptDate', 'usageRatio'];

export const equipmentConfig = {
  pageSize: 5,
  showableFields,
  editableFields,
  sortableFields,
  searchDelayMilisecond: 500,
  render: {
    clinic: (clinic: Clinic) => clinic.name,
  },
};
