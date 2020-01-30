import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcademyService } from '../shared/services/academy.service';
import { Academy } from '../shared/models/academy';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-academy-view',
  templateUrl: './academy-view.component.html',
  styleUrls: ['./academy-view.component.scss']
})
export class AcademyViewComponent implements OnInit {

  private academy: Academy;
  public academy$: ReplaySubject<Academy> = new ReplaySubject(1);
  public inUpdate = false;

  constructor(
    private route: ActivatedRoute,
    private academyService: AcademyService
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

}
