import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ClinicLookupInput, ClinicLookupResult } from '@interfaces/clinic.interface';
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

  private _httpError: BehaviorSubject<string | null> = new BehaviorSubject(null);
  readonly httpError: Observable<string | null> = this._httpError.asObservable();

  constructor(private _http: HttpClient) {}

  readonly setIsLoading = (input: boolean) => {
    this._isLoading.next(input);
  };

  readonly setHttpError = (input: number) => {
    this._httpError.next(errorMessages[ServerErrorTypesEnum[input]]);
  };

  readonly getClinics = (input: ClinicLookupInput, options: HttpRequestExtra): Observable<ClinicLookupResult> => {
    const params = inputToParamsConverter(input as any);

    return this._http.get<ClinicLookupResult>(urlConfig.clinic.lookup, { params, ...options });
  };
}
