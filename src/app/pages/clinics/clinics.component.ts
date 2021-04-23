import { Component, OnInit } from '@angular/core';
import { ClinicService } from '@services/clinic.service';
import { ClinicLookupResult } from 'app/types/clinic.type';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss'],
})
export class ClinicsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
