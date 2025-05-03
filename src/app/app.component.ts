import { Component, ViewChild } from '@angular/core';
//import { MatMenuTrigger } from '@angular/material/menu';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from './shared/models/ui-control';
//import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskTrackerApp';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private router: Router) { }

  expandedMenu: string | null = null;

  toggleMenu(label: string): void {
    this.expandedMenu = this.expandedMenu === label ? null : label;
  }

    

  menuItem: MenuItem[] = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'inventory_2',
      label: 'Tasks',
      route: 'task',
      subItems: [
        {
          icon: 'menu_book',
          label: 'All',
          route: '/all-task'
        },
        {
          icon: 'library_add',
          label: 'New',
          route: '/new-task'
        }
      ]
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics'
    },
    {
      icon: 'settings',
      label: 'Settings',
      route: 'settings'
    },
  ];

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      //.pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    // this.router.events
    //   .pipe(
    //     untilDestroyed(this),
    //     filter((e) => e instanceof NavigationEnd)
    //   )
    //   .subscribe(() => {
    //     if (this.sidenav.mode === 'over') {
    //       this.sidenav.close();
    //     }
    //   });
  }
}
