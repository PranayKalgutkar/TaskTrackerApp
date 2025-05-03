import { Component, Input} from '@angular/core';
import { MenuItem } from '../../shared/constants/ui-control';
//import { fadeInOut } from '../../utils/navigation-utils';
import { animate, animation, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  animations: [

    trigger('expandContractMenu', [
      transition(':enter', [
        style({ opacity: 0, height: '0px' }),
        animate('500ms ease-in-out', style({ opacity: 1, height: '*' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0, height: '0px' }))
      ])
    ])
  ]
})
export class SideNavComponent {

  //sideNavCollapsed = signal(false);
  // Side nav collapsed state
  private _sideNavCollapsed = false;

  @Input() set collapsed(val: boolean) {
    this._sideNavCollapsed = val;
  }

  get sideNavCollapsed(): boolean {
    return this._sideNavCollapsed;
  }

  // Tracks which menu items are expanded
  expandedMenus: { [key: string]: boolean } = {};

  // Flag for nested menu open (if needed separately)
  nestedMenuOpen = false;

  menuItem: MenuItem[] = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'inventory_2',
      label: 'Inventory',
      route: 'inventory',
      subItems: [
        {
          icon: 'menu_book',
          label: 'Book List',
          route: '/master/flattypes'
        },
        {
          icon: 'library_add',
          label: 'Add Book',
          route: '/inventory/book/new'
        }
      ]
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'resident',
      subItems: [
        {
          icon: 'play_circle',
          label: 'Videos',
          route: '/resident/owner/new'
        }
      ]
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics'
    },
    {
      icon: 'comment',
      label: 'Comments',
      route: 'new-task'
    },
  ];

  toggleNested(menuItem: MenuItem): void {
    if (!menuItem.subItems || menuItem.subItems.length === 0) {
      return;
    }

    this.expandedMenus[menuItem.label] = !this.isMenuOpen(menuItem);
  }

  isMenuOpen(menuItem: MenuItem): boolean {
    //alert("isMenuOpen" + menuItem);
    return this.expandedMenus[menuItem.label] || false;
  }

  get profilePicSize(): string {
    return this.sideNavCollapsed ? '32' : '100';
  }

  logSideNavState(): void {
    console.log("SideNav Collapsed:", this.sideNavCollapsed);
  }

  // profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');

  // logSideNavState() {
  //   console.log("SideNav Collapsed:", this.sideNavCollapsed());
  // }

}
