import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { ServiceGeneralService } from '../shared/services/service-general.service';
import { Lesson } from '../shared/models/lesson';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  private lessons: Lesson[]

  constructor(
    private router: Router,
    private userApi: UserServiceService,
    private serviceApi: ServiceGeneralService,
  ) { 
    this.lessons=this.serviceApi.getLessons()
  }

  ngOnInit() {

    
  }

}
//////////
