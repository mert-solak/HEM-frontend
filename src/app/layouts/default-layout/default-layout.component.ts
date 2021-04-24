import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { isDefined } from '@angular/compiler/src/util';

import { HttpService } from '@services/http.service';
import { snackbarConfig } from '@configs/snackbar.config';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar, private _httpService: HttpService) {}

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: snackbarConfig.durationMilisecond,
    });
  }

  ngOnInit() {
    this._httpService.httpErrorMessage.subscribe((data) => {
      if (isDefined(data)) {
        this.openSnackBar(data);
      }
    });

    this._httpService.httpSuccessMessage.subscribe((data) => {
      if (isDefined(data)) {
        this.openSnackBar(data);
      }
    });
  }
}
