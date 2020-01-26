import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { Router } from '@angular/router';
import { BsDropdownConfig } from 'ngx-bootstrap';






@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class SidebarComponent implements OnInit {

  public showSideBar = false;
  public role: string;

  constructor(
    private userApi: UserServiceService,
    private router: Router) {
      if ((this.userApi.isAdmin())  || (this.userApi.isSuperUser()))  {
        this.showSideBar = true;
      }
     }

  ngOnInit() {
  }

}
