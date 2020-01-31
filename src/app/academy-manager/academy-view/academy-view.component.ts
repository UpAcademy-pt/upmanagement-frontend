import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcademyService } from '../shared/services/academy.service';
import { Academy } from '../shared/models/academy';
import { ReplaySubject } from 'rxjs';
import { BsModalService, BsModalRef, BsDropdownConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-academy-view',
  templateUrl: './academy-view.component.html',
  styleUrls: ['./academy-view.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class AcademyViewComponent implements OnInit {

  private academy: Academy;
  public academy$: ReplaySubject<Academy> = new ReplaySubject(1);
  public inUpdate = false;
  public dates: string;
  public datesArray: string[];
  private modalRef: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private academyService: AcademyService,
    private modalService: BsModalService,
    private router: Router
  ) { this.route.params.subscribe(
    params => {
      this.academyService.getbyId(Number(params.academyId)).subscribe(
        (academy: Academy) => {
          this.academy = academy;
          this.academy$.next(this.academy);
        }
      ); });
    }

  ngOnInit() {
  }

   public toggleUpdateAcademy() {
     this.inUpdate = true;
   }

   public getDates(dates: string) {
    this.datesArray = dates.split(' - ');
    this.academy.startDate = this.datesArray[0];
    this.academy.endDate = this.datesArray[1];
    console.log("de " + this.academy.startDate + " a " + this.academy.endDate);
    
  }

  public updateAcademy(dates: string) {
    this.getDates(dates);
    this.academyService.updateAcademy(this.academy).subscribe(
      (msg: string) => {
        console.log(msg);
        this.inUpdate = false;
      }, (error: string) => {
        console.log(error);
      });
  }

  public deleteAcademy() {
    this.academyService.deleteAcademy(this.academy.id).subscribe(
      (msg: string) => {
        console.log(msg);
        this.returnToTable();
      }, (error: string) => {
        console.log(error);
      });
  }

  public returnToTable() {
    this.router.navigate(['/academy-manager/admin-academies']);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public showModule(moduleId: number) {
    this.router.navigate(['/academy-manager/module/' + moduleId]);
  }

}
