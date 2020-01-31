import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import { TemplateService } from '../services/template-service/template.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  public templates$: ReplaySubject<any[]>;
  faSadTear = faSadTear;

  constructor(
    private router: Router,
    private templateService: TemplateService
  ) { 
    this.templateService.getAllTemplates();
    this.templates$ = templateService.templates$;
  }
  
  ngOnInit() {
  }

  public editTemplate(templateId: number) {
    this.router.navigate(['/questionario/template/editor'], { state: { id: templateId} });
  }

}

  

