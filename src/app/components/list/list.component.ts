import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() data: Record<string, string>[];
  @Input() showableFields: string[];
  @Input() showableFieldsTexts: Record<string, string>;
  @Input() render: Record<string, (value: any) => string>;

  constructor() {}

  ngOnInit() {}
}
