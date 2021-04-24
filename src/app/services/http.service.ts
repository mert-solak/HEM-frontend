import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  ClinicAddInput,
  ClinicAddResult,
  ClinicDeleteInput,
  ClinicDeleteResult,
  ClinicEditInput,
  ClinicEditResult,
  ClinicGetInput,
  ClinicGetResult,
  ClinicLookupInput,
  ClinicLookupResult,
} from '@interfaces/clinic.interface';
import { HttpRequestExtra } from '@interfaces/http.interface';
import { ServerErrorTypesEnum } from '@enums/error.enum';
import { errorMessages } from '@locals/error.local';
import { inputToParamsConverter } from '@helpers/http.helper';
import { urlConfig } from '@configs/url.config';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  readonly isLoading: Observable<boolean> = this._isLoading.asObservable();

  private _httpErrorMessage: BehaviorSubject<string | null> = new BehaviorSubject(null);
  readonly httpErrorMessage: Observable<string | null> = this._httpErrorMessage.asObservable();

  private _httpSuccessMessage: BehaviorSubject<string | null> = new BehaviorSubject(null);
  readonly httpSuccessMessage: Observable<string | null> = this._httpSuccessMessage.asObservable();

  constructor(private _http: HttpClient) {}

  readonly setIsLoading = (input: boolean) => {
    this._isLoading.next(input);
  };

  readonly setHttpErrorMessage = (input: number) => {
    this._httpErrorMessage.next(errorMessages[ServerErrorTypesEnum[input]]);
  };

  readonly setHttpSuccessMessage = (message: string) => {
    this._httpSuccessMessage.next(message);
  };

  readonly getClinics = (input: ClinicLookupInput, options: HttpRequestExtra): Observable<ClinicLookupResult> => {
    const params = inputToParamsConverter(input as any);

    return this._http.request<ClinicLookupResult>('get', urlConfig.clinic.lookup, { params, ...options });
  };

  readonly getClinic = (input: ClinicGetInput, options: HttpRequestExtra): Observable<ClinicGetResult> => {
    const params = inputToParamsConverter(input as any);

    return this._http.request<ClinicGetResult>('get', urlConfig.clinic.get, { params, ...options });
  };

  readonly editClinic = (input: ClinicEditInput, options: HttpRequestExtra): Observable<ClinicEditResult> => {
    return this._http.request<ClinicEditResult>('patch', urlConfig.clinic.edit, { body: input, ...options });
  };

  readonly deleteClinic = (input: ClinicDeleteInput, options: HttpRequestExtra): Observable<ClinicDeleteResult> => {
    const params = inputToParamsConverter(input as any);

    return this._http.request<ClinicDeleteResult>('delete', urlConfig.clinic.delete, { params: params, ...options });
  };

  readonly addClinic = (input: ClinicAddInput, options: HttpRequestExtra): Observable<ClinicAddResult> => {
    const params = inputToParamsConverter(input as any);

    return this._http.request<ClinicAddResult>('post', urlConfig.clinic.add, { body: params, ...options });
  };
}
