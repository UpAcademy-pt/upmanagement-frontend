import { Component, OnInit, TemplateRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Academy } from '../shared/models/academy';
import { AcademyService } from '../shared/services/academy.service';
import { BsModalService, BsModalRef, BsDropdownConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-admin-academies',
  templateUrl: './admin-academies.component.html',
  styleUrls: ['./admin-academies.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class AdminAcademiesComponent implements OnInit {

  public academies$: ReplaySubject<Academy[]>;

  modalRef: BsModalRef;
  public edNameField: string;
  public startDateField: string;
  public endDateField: string;
  public clientField: string;
  public academies: Academy[];
  public academyToCreate: Academy = new Academy();
  public showTable = false;

  constructor(
    private academyService: AcademyService,
    private modalService: BsModalService
  ) {
    this.academies$ = this.academyService.academies$;
  }

  ngOnInit() {
  }

  public getAllAcademies() {
    this.academyService.getAllAcademies(this.edNameField, this.startDateField, this.endDateField, this.clientField)
    .subscribe((academies: Academy[]) => {
      this.academies = academies;
      if (this.academies.length > 0) {
        this.showTable = true;
      }
    });
  }

  public createAcademy() {
    this.academyService.createAcademy(this.academyToCreate).subscribe(
      (msg: string) => {
        this.getAllAcademies();
      }
    );
    this.modalRef.hide();
    this.academyToCreate = new Academy();
  }

  openModalAddAcademy(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
