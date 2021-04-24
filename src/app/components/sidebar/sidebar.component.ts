import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

import { getParentRoute } from '@helpers/route.helper';

type ActiveMenuItemType = 'clinics' | 'equipments' | string;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  activeMenuItem: ActiveMenuItemType = 'clinics';

  constructor(private _router: Router) {}

  ngOnInit() {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.activeMenuItem = getParentRoute(event.url);
      }
    });
  }

  configureSelectedMenuItem = (expected: ActiveMenuItemType) => {
    if (expected === this.activeMenuItem) {
      return 'menu-list-item menu-list-item-selected';
    }

    return 'menu-list-item';
  };
}
