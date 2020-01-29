import { Component, OnInit, TemplateRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Academy } from '../shared/models/academy';
import { AcademyService } from '../shared/services/academy.service';
import { BsModalService, BsModalRef, BsDropdownConfig } from 'ngx-bootstrap';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-academies',
  templateUrl: './admin-academies.component.html',
  styleUrls: ['./admin-academies.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class AdminAcademiesComponent implements OnInit {

  currentDate = new Date();

  datesForm = new FormGroup({
    dateRange: new FormControl([
      new Date(),
      new Date(this.currentDate.setDate(this.currentDate.getDate() + 7))
    ])
  });

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  modalRef: BsModalRef;
  public academies$: ReplaySubject<Academy[]> = new ReplaySubject(1);
  public edNameField: string;
  public dates: string;
  public datesArray: string[];
  public clientField: string;
  public modulesField: string[];
  public studentsField: string[];
  public warningField: string;
  public usefulInfoField: string;
  public academyTypeField: string;
  public academies: Academy[];
  public academyToCreate: Academy = new Academy();
  public academyToUpdate: Academy = new Academy();
  public academyToDeleteRow: number;
  public showTable = false;

  constructor(
    private academyService: AcademyService,
    private modalService: BsModalService
  ) {
    this.getAllAcademies();
  }

  ngOnInit() {
  }

  public getAllAcademies() {
    this.academyService.getAllAcademies()
    .subscribe((academies: Academy[]) => {
      this.academies = academies;
      this.academies$.next(academies);
      if (this.academies.length > 0) {
        this.showTable = true;
      }
    });
  }

  public createAcademy() {
    this.getDates(this.academyToCreate);
    this.academyService.createAcademy(this.academyToCreate).subscribe(
      (msg: string) => {
        this.getAllAcademies();
      }
    );
    console.log(this.academyToCreate);
    this.modalRef.hide();
    this.academyToCreate = new Academy();
  }

  public updateAcademy() {
    this.academyService.updateAcademy(this.academyToUpdate).subscribe(
      (msg: string) => {
        this.getAllAcademies();
        console.log(msg);
      }, (error: string) => {
        console.log(error);
      });
    this.modalRef.hide();
  }

  public deleteAcademy() {
    this.academyService.deleteAcademy(this.academies[this.academyToDeleteRow].id).subscribe(
      (msg: string) => {
        this.academies.splice(this.academyToDeleteRow, 1);
        if (this.academies.length <= 0) {
          this.showTable = false;
        }
      }, (error: string) => {
        console.log(error);
      });
    this.modalRef.hide();
  }

  openModalAddAcademy(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalUpdateAcademy(template: TemplateRef<any>, academyToUpdate: Academy) {
    this.academyToUpdate = academyToUpdate;
    this.modalRef = this.modalService.show(template);
  }

  openModalConfirmDeleteAcademy(template: TemplateRef<any>, rowIndex: number) {
    this.academyToDeleteRow = rowIndex;
    this.modalRef = this.modalService.show(template);
  }

  public getDates(academy) {
    this.dates = (<HTMLInputElement>document.getElementById("datesArray")).value;
    console.log(this.dates);
    this.datesArray = this.dates.split(' - ');
    academy.startDate = this.datesArray[0];
    academy.endDate = this.datesArray[1];
    console.log(academy.startDate);
    console.log(academy.endDate);
  }
}
