import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { Edition } from '../../models/edition/edition';
import { ServiceGeneralService } from '../../services/service-general.service';
import { ReplaySubject } from 'rxjs';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})

export class SideBarComponent implements OnInit {
  public showSuperUserTab: boolean = false;
  private edtions: Edition[];
  private edtions$: ReplaySubject<any> = new ReplaySubject(1);
  


  constructor(
    private router: Router,
    private userApi: UserServiceService,
    private serviceApi: ServiceGeneralService,
  ) {
    if (this.userApi.isSuperUser()||this.userApi.isAdmin()) {
      this.showSuperUserTab = true;
    }
    this.serviceApi.getEditions().subscribe(
      (data:any) =>{
        this.edtions= data;
        this.edtions$.next(data);
      }
    );
    console.log(this.showSuperUserTab);
   }

  ngOnInit() {
  
  }
  



}
