import { Component, OnInit, TemplateRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { User } from 'src/app/core/models/user';
import { AccountService } from '../shared/services/account.service';
import { Router } from '@angular/router';
import { AcademyService } from '../shared/services/academy.service';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Academy } from '../shared/models/academy';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.scss']
})
export class AdminStudentsComponent implements OnInit {

  private studentUsers: User[];
  public studentUsers$: ReplaySubject<User[]> = new ReplaySubject(1);
  private studentUserAccounts: {}[] = [];
  public studentUserAccounts$: ReplaySubject<{}[]> = new ReplaySubject(1);
  private accountAcademies: string[] = [];
  private sorted = false;
  public faSort = faSort;
  public allAcademiesNames: {}[] = [{ 'id': undefined, 'text': 'Todas' }];
  private filteredStudents: {}[] = [];


  constructor(
    private accountService: AccountService,
    private userService: UserServiceService,
    private router: Router,
    private academyService: AcademyService
  ) {
    this.getAllStudents();
    this.getAllAcademies();
  }

  ngOnInit() {
  }

  public getAllStudents() {
    this.userService.getUsers('', '', 'USER').subscribe(
      (res: any) => {
        this.studentUsers = res;
        this.studentUsers$.next(res);
        this.studentUsers.forEach(student => this.getStudentAccount(student));
      }
    )
  }

  public getStudentAccount(studentUser: User) {
    this.accountService.getByUserId(studentUser.id).subscribe((account: any) => {
      if (account !== null) {
        for (const academyId of account.academyIds) {
          this.getAcademy(academyId);
        }
        this.studentUserAccounts.push({ 'studentUser': studentUser, 'studentAccount': account, 'academyNames': this.accountAcademies});
        this.studentUserAccounts$.next(this.studentUserAccounts);
        this.accountAcademies = [];
      }
    });
  }

  public showProfile(userId: number) {
    this.router.navigate(['/academy-manager/profile/' + userId]);
  }

  public getAcademy(id: number) {
    this.academyService.getbyId(id).subscribe(
      (res: any) => {
        if (res !== null) {
          this.accountAcademies.push(res.edName);
        }
      }
    );
  }

  public getAllAcademies() {
    this.academyService.getAllAcademies().subscribe(
      (academies: Academy[]) => {
        for (const academy of academies) {
          this.allAcademiesNames.push({ 'id': academy.edName, 'text': academy.edName });
        }
      }
    );
  }

  public sortTable() {
    this.sorted ? this.studentUserAccounts.sort() : this.studentUserAccounts.reverse();
    this.studentUserAccounts$.next(this.studentUserAccounts);
  }

  public filterTable(nameInput: string, academyInput: string) {
    console.log(academyInput);
    
    if (nameInput !== '') {
       if (academyInput !== undefined ) {
         console.log("ambos");
         
        this.filteredStudents = this.studentUserAccounts.filter(
          student => student['studentUser'].name.toLowerCase().includes(nameInput.toLowerCase()) 
          && student['academyNames'].includes(academyInput));
        this.studentUserAccounts$.next(this.filteredStudents);
      } else {
        console.log("só nome");
        
        this.filteredStudents = this.studentUserAccounts.filter(student => 
          student['studentUser'].name.toLowerCase().includes(nameInput.toLowerCase()));
        this.studentUserAccounts$.next(this.filteredStudents);
      }
    } else if (academyInput !== undefined) {
      console.log("só academia");
      
      this.filteredStudents = this.studentUserAccounts.filter(student => student['academyNames'].includes(academyInput));
      this.studentUserAccounts$.next(this.filteredStudents);
    } else {
      console.log("nada");
      
      this.studentUserAccounts$.next(this.studentUserAccounts);
    }
  }

}
