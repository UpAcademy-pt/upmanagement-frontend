import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { ReplaySubject } from 'rxjs';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  public students$: ReplaySubject<User[]> = new ReplaySubject(1);

  constructor(
    private userService: UserServiceService
  ) {
    this.getAllStudents();
  }

  ngOnInit() {
  }

  public getAllStudents() {
    this.userService.getUsers('', '', 'USER').subscribe(
      (res: any) => {
        this.students$.next(res);
      }
    );
  }

}
