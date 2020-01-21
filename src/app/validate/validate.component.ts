import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../core/services/user-service/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../core/models/user';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {

  public id: number;
  public email: string;
  public oldPassword: string;
  public newPassword1: string;
  public newPassword2: string;
  public validUser: User= new User();


  constructor(
    private userApi: UserServiceService,
    private router: Router,
    private route :ActivatedRoute
  ) { 
    this.route.params.subscribe(
      params => {
        this.userApi.getUserById(Number(params.id)).subscribe(
          (user: User) => {
            if(user.validatedEmail != true){
              this.router.navigate(['/not-found']);
            }else{
              this.validUser=user;
            };
          }
        )}
    )
  }
  
  ngOnInit() {
  }

  public validateUser(){
    if(this.validUser.email ==this.email){
      if(this.newPassword1 == this.newPassword2){
        this.validUser.password = this.oldPassword;
        this.userApi.validatePassword(this.validUser, this.newPassword1)
        //.subscribe(
        //(msg:string)=>
        //)
      }else{
        //erro 2passes novar nao corespondem
      };
       }else{
        //msg erro email nao é igual
       }
    
  

  
  }
}
