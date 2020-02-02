import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { ServiceGeneralService } from '../shared/services/service-general.service';
import { Lesson } from '../shared/models/lesson/lesson';
import { DataService } from '../shared/services/data.service';
import { ReplaySubject } from 'rxjs';
import { Account } from '../shared/models/account/account';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  public lessons$: ReplaySubject<Lesson[][]> = new ReplaySubject(1);
  private lessons: any[][];
  private notes: any[];
  private editionsIds: number[] = [];
  private currAccount: Account;

  constructor(
    private router: Router,
    private userApi: UserServiceService,
    private serviceApi: ServiceGeneralService,
    private dataService: DataService,
  ) {
    // this.buildArrayLessons();
    this.lessons$ = this.dataService.lessons$;
  }

  ngOnInit() {
  }

  // /**
  //  * getLessonsByEditionId
  //  */
  // public getEditionsIds() {
  //   // this.serviceApi.currentAccount.editions.forEach(element => {
  //   //   this.editionsIds.push(element.id);
  //   this.serviceApi.currentAccount.editions.map((e) => this.editionsIds.push(e.id));
  //   console.log(this.editionsIds);

  // }

  // /**
  //  * buildArrayLessons
  //  */
  // public buildArrayLessons() {
  //   this.serviceApi.getEditionsIds();
  //   this.editionsIds.forEach(element => {
  //     this.lessons[this.editionsIds.indexOf(element)].push(this.dataService.getLessonsByEditionId(element));
  //   });
  // }


}

