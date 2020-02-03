import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { ServiceGeneralService } from '../shared/services/service-general.service';
import { ReplaySubject } from 'rxjs';
import { Edition } from '../shared/models/edition/edition';
import { Route } from '@angular/compiler/src/core';
import { MaterialsService } from '../shared/services/materials.service';
import { Materials } from '../shared/models/mamaterials/materials';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Lesson } from '../shared/models/lesson/lesson';
import { LessonsServiceService } from '../shared/services/lessons-service/lessons-service.service';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  public isSuperUser: boolean = false;

  private id: number;
  private lesson: Lesson = new Lesson();
  public lessons$: ReplaySubject<Lesson[]> = new ReplaySubject(1);
  private lessons: Lesson[]= new Array<Lesson>();
  private notes: any[];
  private edtions: Edition[]=[];
  private edtions$: ReplaySubject<Edition[]> = new ReplaySubject(1);
  private rowForEditions: number;
  private rowForEditions$: ReplaySubject<any> = new ReplaySubject(1);
  private materials$: ReplaySubject<any> = new ReplaySubject(1);
  private materials: Materials= new Materials();
  private materialsDisplay$:ReplaySubject<any[][]> = new ReplaySubject(1); 
  private matsDisplay:any [];
  public showMats:boolean= false;
  public newLesson: boolean = false;
  public editValid: boolean =false;



  public title: string;
  public description: string;
  public material = new Materials();
  public materialsInLesson: any[] = [];

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  indexOfLessonToDelete: number;
  modalRef: BsModalRef;
  indexOfLessonToEdit: number;

  form: FormGroup;




  constructor(
    private apiLesson: LessonsServiceService,
    private userApi: UserServiceService,
    private materialsApi: MaterialsService,
    private route:ActivatedRoute,
    private router: Router,
    private serviceApi: ServiceGeneralService,
    private modalService: BsModalService,
    private fb: FormBuilder
  ) { 
    if (this.userApi.isSuperUser() || this.userApi.isAdmin()) {
      this.isSuperUser = true;
    }
    this.route.params.subscribe(
      (params) => {
        console.log(params);
        
        this.serviceApi.getEditions().subscribe(
          (data:Edition[])=>{
            let param = data[params.i] == null ? data[0] : data[params.i];
            console.log(param.lessonsDtos);
            this.lessons= param.lessonsDtos;
            this.lessons$.next(param.lessonsDtos);
            this.matsDisplay = Array(param.lessonsDtos.length).fill(new Array()) ;
            console.log( this.matsDisplay);
          }
        )
        if (params.i == null) {
          this.rowForEditions$.next(0);
        this.rowForEditions= Number(0);
        }else{
        this.rowForEditions$.next(params.i);
        this.rowForEditions= Number(params.i);
        }
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
    this.form = this.fb.group({
      checkArray: this.fb.array([])
    })
  }

  ngOnInit() {
  }

  // ------------
  // Create
  // ------------
  public createLesson() {
    this.lesson.editionId = this.edtions[this.rowForEditions].id;
    this.lesson.title = this.title;
    this.lesson.description = this.description;
    let materialsInLesson=[];
    this.lesson.materialsIds = materialsInLesson;     // ids
    console.log(this.lesson);

    this.apiLesson.createLesson(this.lesson).subscribe(
      (result: any) => {
        console.log(this.lessons);
        this.lessons.push(this.lesson);
        this.updateLessons$();
        this.lesson = new Lesson();
      }
    )

  }

  public updateLessons$() {
    console.log(this.lessons);
    this.lessons$.next(this.lessons);
  }


  // ------------
  // Delete
  // ------------
  public openModalDeleteLesson(template: TemplateRef<any>, index: number) {
    this.indexOfLessonToDelete = index;
    console.log(this.indexOfLessonToDelete);
    this.modalRef = this.modalService.show(template);
  }

  public getLessonsMaterials(lesson: Lesson,i :number){
    let materials_array = []
    for (let i = 0; i < lesson.materialsIds.length; i++) {
      materials_array.push(this.materials[i]);
    };
    this.matsDisplay.splice(i,1,materials_array);
    console.log(this.matsDisplay);
    this.materialsDisplay$.next(this.matsDisplay);
    this.showMats= true;
  }

  
  
  public deleteLessonById() {
    let id = this.lessons[this.indexOfLessonToDelete].id;
    this.apiLesson.deleteById(id).subscribe(
      () => {
        const lessonIndex = this.lessons.map((lesson) => lesson.id).indexOf(id);
        console.log(lessonIndex);

        if (lessonIndex !== -1) {
          this.lessons.splice(lessonIndex, 1);
        }
        this.updateLessons$();
      }
    );

  }

  // ------------
  // Edit
  // ------------

  public openModalEditLesson(template: TemplateRef<any>, index: number) {
    this.indexOfLessonToEdit = index;
    this.modalRef = this.modalService.show(template);
  }

  public editLesson() {
    this.lesson.id = this.lessons[this.indexOfLessonToEdit].id
    this.lesson.description = this.description;
    this.lesson.title = this.title;
   /*  this.lesson.materialsIds = this.materials.id; */

    this.apiLesson.updateLesson(this.lesson).subscribe(
      () => {
        this.lessons[this.indexOfLessonToEdit] = this.lesson;
        this.updateLessons$();
      }
    );
  }


  // ------------
  // ADICIONAR MATERIAIS
  // ------------

  public openModaladdMaterials(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public addMaterials() {


    console.log(this.form.value)

    // for (let i = 0; i < this.form.value.length; i++) {

    //   Number(this.form.value[i]);
    //   console.log(this.form.value[i]);

    //   this.materials.forEach(mat => {

    //     if (mat.id != this.form.value[i]) {
    //       this.materials.push(this.form.value[i]);
    //     }
    //   });

    //   //  this.materials.push(this.form.value[i])
    // }
    // console.log(this.form.value)

  }



  //falta testar
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }


    console.log(Number(checkArray.value));

    let idMatAdded: number = Number(checkArray.value);

    this.materialsInLesson.forEach(mat => {

      if (mat.id != idMatAdded) {
        this.materialsInLesson.push(idMatAdded);
      }
    });

    //  this.materialsInLesson.push(this.form.value[i])

    console.log("materialsInLesson: ", this.materialsInLesson)


  }


}

