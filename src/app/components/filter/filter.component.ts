import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() sortableFieldsTexts: Record<string, string>;
  @Output() onSortByChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onClickFilter(filter: string) {
    this.onSortByChange.emit(filter);
  }

  getKeys = (object: Record<string, string>) => Object.keys(object);
}
