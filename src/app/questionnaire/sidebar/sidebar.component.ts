import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { Router } from '@angular/router';
import { BsDropdownConfig } from 'ngx-bootstrap';
import { faExpandAlt, faCompressAlt, faQuestion, faHistory, faFile, faFileAlt, faPlusSquare, faChartPie} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }],
})
export class SidebarComponent implements OnInit {
  public showSideBar = false;
  public role: string;
  faCompress = faCompressAlt;
  faExpand = faExpandAlt;
  faQuestion = faQuestion;
  faHistory = faHistory;
  faFile = faFile;
  faFileAlt = faFileAlt;
  faPlusSquare = faPlusSquare;
  faChartPie = faChartPie;

  public pushStatsDown = false;
  public collapsed = false;
  public new = false;
  public newFile = false;
  public template = false;
  public statistics = false;
  public userName: string;
  public admin = false;
  public superUser = false;
  public user = false;
  public adminImg: string;
  public superUserImg: string;
  public userImg: string;

  constructor(
    private userApi: UserServiceService,
    private router: Router) {
      if ((this.userApi.isAdmin())  || (this.userApi.isSuperUser()))  {
        this.showSideBar = true;
      }
      this.userName = userApi.getCurrentName();

      if (this.userApi.isAdmin()) {
       this.adminImg = 'https://pbs.twimg.com/profile_images/588344745082146816/sDYHYEjp.jpg';
       this.admin = true;
      } else if (this.userApi.isSuperUser()) {
        this.superUserImg = 'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3556/s200/up-academy-logo.png';
        this.superUser = true;
      } else {
       // tslint:disable-next-line: max-line-length
       this.userImg = 'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600185/59972237-student-icon-with-laptop-computer-online-graduation-academic-education-degree-icon-in-glyph-vector-i.jpg';
       this.user = true;
      }
   }

  ngOnInit() {
  }


}
