import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { isDefined } from '@angular/compiler/src/util';

import { ClinicLookupResult, ClinicLookupInput } from '@interfaces/clinic.interface';
import { HttpService } from '@services/http.service';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  private _clinics: BehaviorSubject<ClinicLookupResult> = new BehaviorSubject({ count: 0, rows: [] });
  public readonly clinics: Observable<ClinicLookupResult> = this._clinics.asObservable();

  constructor(private _http: HttpService) {}

  readonly getClinics = (input: ClinicLookupInput, handleError?: (error: any) => void) => {
    const obs = this._http.getClinics(input, { blockGlobalErrorHandler: !!handleError });

    obs.subscribe(
      (data) => {
        this._clinics.next(data);
      },
      (error) => {
        if (isDefined(handleError)) {
          handleError(error);
        }
      },
    );

    return obs;
  };
}
