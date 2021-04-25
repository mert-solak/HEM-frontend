import { FormControl } from '@angular/forms';

import { validationErrorMessages } from '@locals/validation.local';

export const getErrorFieldName = (formControl: FormControl): string => {
  return validationErrorMessages[Object.keys(formControl.errors)[0]];
};
