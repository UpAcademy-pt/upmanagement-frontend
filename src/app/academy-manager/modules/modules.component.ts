import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { ReplaySubject } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { ModuleService } from '../shared/services/module.service';
import { EvaluationService } from '../shared/services/evaluation.service';
import { GradeService } from '../shared/services/grade.service';
import { Module } from '../shared/models/module';
import { Evaluation } from '../shared/models/evaluation';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Grade } from '../shared/models/grade';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  private students$: ReplaySubject<User[]> = new ReplaySubject(1);
  private module: Module;
  private module$: ReplaySubject<Module> = new ReplaySubject(1);
  private evaluations: Evaluation[] = [];
  private evaluations$: ReplaySubject<Evaluation[]> = new ReplaySubject(1);

  public evaluationToCreate: Evaluation = new Evaluation();
  public grade: Grade;
  public gradesArray: Grade[];

  modalRef: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceService,
    private moduleService: ModuleService,
    private evaluationService: EvaluationService,
    private gradeService: GradeService,
    private modalService: BsModalService
  ) {
    this.route.params.subscribe(
      params => {
        this.moduleService.getbyId(Number(params.moduleId)).subscribe(
          (module: Module) => {
            this.module = module;
            this.module$.next(this.module);
            this.getEvaluationsByModuleId(this.module.evaluationIds);
          }
        ); });
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

  public getEvaluationsByModuleId(idArray: number[]) {
    idArray.forEach(id => {
      this.evaluationService.getbyId(id).subscribe(
        (evaluation: Evaluation) => {
          this.evaluations.push(evaluation);
          this.evaluations$.next(this.evaluations);
        }
      );
    });
  }

  public createEvaluation(grades: Grade[]) {
    this.evaluationToCreate.grades = this.gradesArray;
    this.evaluationService.createEvaluation(this.evaluationToCreate).subscribe(
      (msg: string) => {
       console.log(this.evaluationToCreate);
      }
    );
    this.modalRef.hide();
    this.evaluationToCreate = new Evaluation();
  }

  public createGrades(subject: string) {
    this.grade.subject = subject;
    this.gradeService.createGrade(this.grade).subscribe(
      (id: number) => {
        this.grade.id = id;
        this.gradesArray.push(this.grade);
      }
    );
  }

  openModalAddEvaluation(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
