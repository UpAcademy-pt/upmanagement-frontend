import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { ServiceGeneralService } from '../shared/services/service-general.service';
import { Lesson } from '../shared/models/lesson/lesson';
import { LessonsServiceService } from '../shared/services/lessons-service/lessons-service.service';
import { ReplaySubject } from 'rxjs';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MaterialsService } from '../shared/services/materials.service';
import { Materials } from '../shared/models/mamaterials/materials';
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
  private lessons: Lesson[];
  private notes: any[];



  public title: string;
  public description: string;

  public materials: any[];
  public materials$: ReplaySubject<Materials[]> = new ReplaySubject(1);
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
    private serviceApi: ServiceGeneralService,
    private materialsApi: MaterialsService,

    private router: Router,

    private modalService: BsModalService,

    private fb: FormBuilder
  ) {
    if (this.userApi.isSuperUser() || this.userApi.isAdmin()) {
      this.isSuperUser = true;
    }

    this.form = this.fb.group({
      checkArray: this.fb.array([])
    })


    //this.lessons$ = this.serviceApi.getLessons(); 
    this.apiLesson.getLessons().subscribe(
      (less: Lesson[]) => {
        this.lessons$.next(less);
        this.lessons = less
        console.log(this.lessons);
      }

    )

  }

  ngOnInit() {
  }

  // ------------
  // Create
  // ------------
  public createLesson() {
    // falta a editionId
    this.lesson.title = this.title;
    this.lesson.description = this.description;
    this.lesson.materials = this.materials;     // ids
    console.log(this.lesson);

    this.apiLesson.createLesson(this.lesson).subscribe(
      (result: any) => {
        console.log(this.lesson);
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
    this.lesson.materials = this.materials;

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


  public getAllMaterials() {
    this.materialsApi.getAllMaterials().subscribe(
      (mat: Materials[]) => {
        this.materials = mat;
        this.materials$.next(mat);
        console.log(this.materials);
      }
    );
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

