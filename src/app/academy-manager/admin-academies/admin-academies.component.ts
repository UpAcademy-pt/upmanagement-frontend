import { Component, OnInit, TemplateRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Academy } from '../shared/models/academy';
import { AcademyService } from '../shared/services/academy.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-admin-academies',
  templateUrl: './admin-academies.component.html',
  styleUrls: ['./admin-academies.component.scss']
})
export class AdminAcademiesComponent implements OnInit {

  public academies$: ReplaySubject<Academy[]>;

  modalRef: BsModalRef;
  private edNameField: string;
  private startDateField: string;
  private endDateField: string;
  private clientField: string;
  private academyToCreate: Academy = new Academy();
  private showTable = false;

  constructor(
    private academyService: AcademyService,
    private modalService: BsModalService
  ) {
    this.academies$ = this.academyService.academies$;
  }

  ngOnInit() {
  }

  public getAllAcademies() {
    this.academyService.getAllAcademies();
  }

  public createAcademy() {
    this.academyService.createAcademy(this.academyToCreate).subscribe(
      (msg: string) => {
        this.getAllAcademies();
      }
    );
    this.modalRef.hide();
    this.academyToCreate = new Academy();
    this.academyToCreate.edName = '';
    this.academyToCreate.startDate = '';
    this.academyToCreate.endDate = '';
    this.academyToCreate.client = '';
  }

  openModalAddAcademy(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
