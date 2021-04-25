import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
import {
  EquipmentAddInput,
  EquipmentAddResult,
  EquipmentDeleteInput,
  EquipmentDeleteResult,
  EquipmentEditInput,
  EquipmentEditResult,
  EquipmentGetInput,
  EquipmentGetResult,
  EquipmentLookupInput,
  EquipmentLookupResult,
} from '@interfaces/equipment.interface';
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
    const message = errorMessages[ServerErrorTypesEnum[input]] || errorMessages.UNHANDLED_ERROR;
    this._httpErrorMessage.next(message);
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
    return this._http.request<ClinicAddResult>('post', urlConfig.clinic.add, { body: input, ...options });
  };

  readonly getEquipments = (
    input: EquipmentLookupInput,
    options: HttpRequestExtra,
  ): Observable<EquipmentLookupResult> => {
    const params = inputToParamsConverter(input as any);

    return this._http.request<EquipmentLookupResult>('get', urlConfig.equipment.lookup, { params, ...options });
  };

  readonly getEquipment = (input: EquipmentGetInput, options: HttpRequestExtra): Observable<EquipmentGetResult> => {
    const params = inputToParamsConverter(input as any);

    return this._http.request<EquipmentGetResult>('get', urlConfig.equipment.get, { params, ...options });
  };

  readonly editEquipment = (input: EquipmentEditInput, options: HttpRequestExtra): Observable<EquipmentEditResult> => {
    return this._http.request<EquipmentEditResult>('patch', urlConfig.equipment.edit, { body: input, ...options });
  };

  readonly deleteEquipment = (
    input: EquipmentDeleteInput,
    options: HttpRequestExtra,
  ): Observable<EquipmentDeleteResult> => {
    const params = inputToParamsConverter(input as any);

    return this._http.request<EquipmentDeleteResult>('delete', urlConfig.equipment.delete, {
      params: params,
      ...options,
    });
  };

  readonly addEquipment = (input: EquipmentAddInput, options: HttpRequestExtra): Observable<EquipmentAddResult> => {
    return this._http.request<EquipmentAddResult>('post', urlConfig.equipment.add, { body: input, ...options });
  };
}
