import { Clinic } from '@interfaces/clinic.interface';

const showableFields: (keyof Clinic)[] = ['name'];
const editableFields: (keyof Clinic)[] = ['name'];

export const clinicConfig = {
  pageSize: 10,
  showableFields,
  editableFields,
};
