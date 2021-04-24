import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { isDefined } from '@angular/compiler/src/util';

import {
  ClinicLookupResult,
  ClinicLookupInput,
  ClinicGetInput,
  ClinicEditInput,
  ClinicDeleteInput,
} from '@interfaces/clinic.interface';
import { HttpService } from '@services/http.service';
import { successMessages } from '@locals/success.local';

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

  readonly getClinic = (input: ClinicGetInput, handleError?: (error: any) => void) => {
    const obs = this._http.getClinic(input, { blockGlobalErrorHandler: !!handleError });

    obs.subscribe(
      (data) => {},
      (error) => {
        if (isDefined(handleError)) {
          handleError(error);
        }
      },
    );

    return obs;
  };

  readonly editClinic = (input: ClinicEditInput, handleError?: (error: any) => void) => {
    const obs = this._http.editClinic(input, { blockGlobalErrorHandler: !!handleError });

    obs.subscribe(
      (data) => {
        this._http.setHttpSuccessMessage(successMessages.success);
      },
      (error) => {
        if (isDefined(handleError)) {
          handleError(error);
        }
      },
    );

    return obs;
  };

  readonly deleteClinic = (input: ClinicDeleteInput, handleError?: (error: any) => void) => {
    const obs = this._http.deleteClinic(input, { blockGlobalErrorHandler: !!handleError });

    obs.subscribe(
      (data) => {
        this._http.setHttpSuccessMessage(successMessages.success);
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
