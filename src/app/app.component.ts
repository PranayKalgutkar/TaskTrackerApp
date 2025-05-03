import { Component, ViewChild } from '@angular/core';
//import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskTrackerApp';

  collapsed = false;

  get sidenavWidth(): string {
    return this.collapsed ? '65px' : '250px';
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }
}
