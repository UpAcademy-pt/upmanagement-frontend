import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  public name: string;
  public email: string;
  readonly URL ="http://localhost:8080/coreFinalProject/academy-manager/missed/account/1";
  misses: any;

  profileForm  = new FormGroup({
    editable: new FormControl(),
    notEditable: new FormControl()
  });

  constructor(
    private userApi: UserServiceService,
    private http: HttpClient
  )
  {
    this.name = this.userApi.getCurrentName();
    this.email = this.userApi.getCurrentEmail();
    this.profileForm.controls['notEditable'].disable();
    this.profileForm.controls['editable'].disable();
    this.getMisses();
    
   }

  ngOnInit() {
  }

  public MakeEdit(){
    this.profileForm.controls['editable'].enable();
    this.toggleShow();
  }

  getMisses(){
    this.misses = this.http.get(this.URL);
  }

isShown: boolean = false ; // hidden by default
toggleShow() {

this.isShown = ! this.isShown;

}

}

