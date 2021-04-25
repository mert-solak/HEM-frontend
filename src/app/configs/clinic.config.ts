import { SortableField, EditableField, ShowableField } from '@interfaces/clinic.interface';

const showableFields: ShowableField[] = ['name'];
const editableFields: EditableField[] = ['name'];
const sortableFields: SortableField[] = ['name'];

export const clinicConfig = {
  pageSize: 10,
  showableFields,
  editableFields,
  sortableFields,
  searchDelayMilisecond: 500,
};
