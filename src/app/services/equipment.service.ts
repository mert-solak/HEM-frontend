import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { isDefined } from '@angular/compiler/src/util';

import {
  EquipmentAddInput,
  EquipmentLookupResult,
  EquipmentGetInput,
  EquipmentEditInput,
  EquipmentDeleteInput,
  EquipmentLookupInput,
} from '@interfaces/equipment.interface';
import { HttpService } from '@services/http.service';
import { successMessages } from '@locals/success.local';
import { equipmentConfig } from '@configs/equipment.config';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  private _equipments: BehaviorSubject<EquipmentLookupResult> = new BehaviorSubject({ count: 0, rows: [] });
  public readonly equipments: Observable<EquipmentLookupResult> = this._equipments.asObservable();

  constructor(private _http: HttpService) {}

  readonly getEquipments = (input: EquipmentLookupInput, handleError?: (error: any) => void) => {
    const obs = this._http.getEquipments(input, { blockGlobalErrorHandler: !!handleError });

    obs.subscribe(
      (data) => {
        this._equipments.next(data);
      },
      (error) => {
        if (isDefined(handleError)) {
          handleError(error);
        }
      },
    );

    return obs;
  };

  readonly getEquipment = (input: EquipmentGetInput, handleError?: (error: any) => void) => {
    const obs = this._http.getEquipment(input, { blockGlobalErrorHandler: !!handleError });

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

  readonly editEquipment = (input: EquipmentEditInput, handleError?: (error: any) => void) => {
    const obs = this._http.editEquipment(input, { blockGlobalErrorHandler: !!handleError });

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

  readonly deleteEquipment = (input: EquipmentDeleteInput, handleError?: (error: any) => void) => {
    const obs = this._http.deleteEquipment(input, { blockGlobalErrorHandler: !!handleError });

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

  readonly addEquipment = (input: EquipmentAddInput, handleError?: (error: any) => void) => {
    const obs = this._http.addEquipment(input, { blockGlobalErrorHandler: !!handleError });

    obs.subscribe(
      (data) => {
        this._http.setHttpSuccessMessage(successMessages.success);

        const currentEquipments = this._equipments.getValue();
        currentEquipments.rows = [data, ...currentEquipments.rows];
        currentEquipments.rows = currentEquipments.rows.slice(0, equipmentConfig.pageSize - 1);
        currentEquipments.count += 1;

        this._equipments.next(currentEquipments);
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
