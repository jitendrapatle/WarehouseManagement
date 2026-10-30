import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import { IEmployee, IEmployeeLoginResponse } from '../../../core/models/interface/common.model';
import { GLOBAL_CONSTANT } from '../../../core/constants/global.constant';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  private readonly router = inject(Router);

  LoggedInData :IEmployee | null = null;
  isSidebarCollapsed = false;
  isSidebarOpen = false;

  get isSidebarExpanded(): boolean {
    return window.innerWidth <= 800 ? this.isSidebarOpen : !this.isSidebarCollapsed;
  }

  constructor(){
    const loggeinLocalData = localStorage.getItem(GLOBAL_CONSTANT.Local_Storage_Login_Key);

    if(loggeinLocalData != null){
      const LoggedInRawData:IEmployeeLoginResponse = JSON.parse(loggeinLocalData)
      this.LoggedInData = LoggedInRawData.employee
    }
  }

  logout(): void {
    localStorage.removeItem(GLOBAL_CONSTANT.Local_Storage_Login_Key);
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  toggleSidebar(): void {
    if (window.innerWidth <= 800) {
      this.isSidebarOpen = !this.isSidebarOpen;
      return;
    }

    this.isSidebarOpen = false;
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }
}
