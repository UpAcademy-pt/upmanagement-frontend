import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public contactTeacher: boolean = true;

  constructor(
    private userService: UserServiceService
  ) {
    if (this.userService.isSuperUser()) {
      this.contactTeacher = false;
    }
  }

  ngOnInit() {
  }

}
