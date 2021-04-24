import { ServerErrorTypesEnum } from '@enums/error.enum';

export const errorMessages: Record<keyof typeof ServerErrorTypesEnum, string> = {
  ALREADY_EXISTS: 'Girilen veri zaten sistemde kayıtlı',
  DATA_NOT_EXISTS: 'Girilen veri sistemde bulunamadı',
  RELATION_NOT_EXISTS: 'Eksik veya hatalı veri girişi',
  UNHANDLED_ERROR: 'Bilinmeye hata',
  VALIDATION_ERROR: 'Girilen veride hata var',
};
