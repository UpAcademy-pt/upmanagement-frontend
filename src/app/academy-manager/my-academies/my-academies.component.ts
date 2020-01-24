import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { AcademyService } from '../shared/services/academy.service';

@Component({
  selector: 'app-my-academies',
  templateUrl: './my-academies.component.html',
  styleUrls: ['./my-academies.component.scss']
})
export class MyAcademiesComponent implements OnInit {

  constructor( 
    private accountService : AccountService,
    private acamdeyService: AcademyService
  ) { 



    
  }

  ngOnInit() {
  }

}
