import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  public name: string;

  profileForm  = new FormGroup({
    editable: new FormControl(),
    notEditable: new FormControl(),
  });

  constructor(
    private userApi: UserServiceService
  ) 
  {
    this.name = this.userApi.getCurrentName();
    this.profileForm.controls['notEditable'].disable();
    this.profileForm.controls['editable'].disable();
    
   }

  ngOnInit() {
  }

  public MakeEdit(){
    this.profileForm.controls['editable'].enable();
    this.toggleShow();
  }

isShown: boolean = false ; // hidden by default
toggleShow() {

this.isShown = ! this.isShown;

}

}

