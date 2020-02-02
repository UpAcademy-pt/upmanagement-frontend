import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { ServiceGeneralService } from '../shared/services/service-general.service';
import { Lesson } from '../shared/models/lesson/lesson';
import { ReplaySubject } from 'rxjs';
import { Edition } from '../shared/models/edition/edition';
import { Route } from '@angular/compiler/src/core';
import { MaterialsService } from '../shared/services/materials.service';
import { Materials } from '../shared/models/mamaterials/materials';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  private lessons: Lesson[];
  private notes: any[];
  private lessons$: ReplaySubject<any> = new ReplaySubject(1);
  private edtions: Edition[]=[];
  private edtions$: ReplaySubject<Edition[]> = new ReplaySubject(1);
  private rowForEditions: any;
  private rowForEditions$: ReplaySubject<any> = new ReplaySubject(1);
  private materials$: ReplaySubject<any> = new ReplaySubject(1);
  private materials: Materials= new Materials();


  constructor(
    private materialsApi: MaterialsService,
    private route:ActivatedRoute,
    private router: Router,
    private serviceApi: ServiceGeneralService,
  ) { 
    this.route.params.subscribe(
      (params) => {
        this.serviceApi.getEditions().subscribe(
          (data:Edition[])=>{
            let param = data[params.i] == null ? data[0] : data[params.i]
            this.lessons$.next(param.lessonsDtos)
          }
        )
        this.rowForEditions$.next(params);
        this.rowForEditions= params;
          }
        );
    this.serviceApi.getEditions().subscribe(
      (data:any) =>{
        console.log(data);
        this.edtions= data;
        this.edtions$.next(data);
      }
    );
    this.materialsApi.getAllMaterials().subscribe(
      (data:any) =>{
        this.materials= data;
        console.log(data);
        this.materials$.next(data)
      }
    )
  }

  ngOnInit() {  
  }

  public getNotesBYId(){
    
  }

  public getLessonsMaterials(lesson: Lesson){
    let materials_array$ = []

    for (let i = 0; i < lesson.materialsIds.length; i++) {
      materials_array$.push(this.materials[i])
    }
    console.log(materials_array$);
    return materials_array$
 
  }
  

}

