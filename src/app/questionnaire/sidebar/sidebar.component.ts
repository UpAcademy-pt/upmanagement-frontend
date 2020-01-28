import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { Router } from '@angular/router';
import { BsDropdownConfig } from 'ngx-bootstrap';
import { faCompress } from '@fortawesome/free-solid-svg-icons';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }],
  // animations: [
  //   trigger('openClose', [
  //     state('open', style({
  //       height: '200px',
  //       opacity: 1,
  //       backgroundColor: 'yellow'
  //     })),
  //     state('closed', style({
  //       height: '100px',
  //       opacity: 0.5,
  //       backgroundColor: 'green'
  //     })),
  //     transition('open => closed', [
  //       animate('1s')
  //     ]),
  //     transition('closed => open', [
  //       animate('0.5s')
  //     ]),
  //   ]),
  // ],
})
export class SidebarComponent implements OnInit {
  public showSideBar = false;
  public role: string;
  faCompress = faCompress;
  faExpand = faExpand;

  private compress = true;
  private pending = true;

  // isOpen = true;

  // toggle() {
  //   this.isOpen = !this.isOpen;
  // }

  

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
