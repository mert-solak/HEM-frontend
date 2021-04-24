import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item: Record<string, string>;
  @Input() showableFields: string[];

  constructor() {}

  ngOnInit() {
    console.log(this.item);
  }
}
