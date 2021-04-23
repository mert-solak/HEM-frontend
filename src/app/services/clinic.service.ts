import { Injectable } from '@angular/core';

import { urlConfig } from '@configs/url.config';
import { ClinicLookupResult, ClinicLookupInput } from 'app/types/clinic.type';
import { axios } from '@utils/axios.util';

import { from, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  clinicsSubject = new Subject<ClinicLookupResult>();

  constructor() {}

  getClinics = async (input: ClinicLookupInput) => {
    const { data } = await axios.get<ClinicLookupResult>(urlConfig.clinic.lookup, {
      params: input,
    });

    this.clinicsSubject.next(data);
  };
}
