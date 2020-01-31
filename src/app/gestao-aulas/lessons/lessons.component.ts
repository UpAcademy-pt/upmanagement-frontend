import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { ServiceGeneralService } from '../shared/services/service-general.service';
import { Lesson } from '../shared/models/lesson/lesson';
import { LessonsServiceService } from '../shared/services/lessons-service/lessons-service.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  public isSuperUser: boolean = false;

  private lesson : Lesson = new Lesson();


  public title: string;
  public description: string;
  public materials: any[];

  private lessons: Lesson[];
  private notes: any[];

  constructor(
private apiLesson: LessonsServiceService,

    private router: Router,
    private userApi: UserServiceService,
    private serviceApi: ServiceGeneralService,
  ) { 

    if (this.userApi.isSuperUser()||this.userApi.isAdmin()) {
      this.isSuperUser = true;
    }



   this.lessons=this.serviceApi.getLessons()
  }

  ngOnInit() {  
  }

  public createLesson(){
this.lesson.title = this.title;
this.lesson.description= this.description;
this.lesson.materials=this.materials;

console.log(this.lesson);

return this.apiLesson.createLesson(this.lesson).subscribe(
  (msg: string) => {
        
   
    console.log(msg);
  },(error: string) => {
    console.log(error);
  }


)


  }

}

