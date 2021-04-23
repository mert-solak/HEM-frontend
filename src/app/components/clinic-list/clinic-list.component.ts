import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.scss'],
})
export class ClinicListComponent implements OnInit {
  clinics = [1, 2];

  constructor() {}

  ngOnInit() {}
}
