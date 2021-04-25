import { Equipment } from '@interfaces/equipment.interface';
import { SortableField, EditableField, ShowableField } from '@interfaces/clinic.interface';

const showableFields: ShowableField[] = ['name'];
const editableFields: EditableField[] = ['name'];
const sortableFields: SortableField[] = ['name'];

export const clinicConfig = {
  pageSize: 5,
  showableFields,
  editableFields,
  sortableFields,
  searchDelayMilisecond: 500,
  render: {
    equipments: (equipments: Equipment[]) => equipments.map((equipment) => equipment.name).join(','),
  },
};
