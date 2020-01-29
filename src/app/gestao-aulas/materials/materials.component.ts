import { Component, OnInit } from '@angular/core';
import { Materials } from '../shared/models/mamaterials/materials';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MaterialsService } from '../shared/services/materials.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  private materials: Materials[]= [];
  private material: Materials = new Materials();
  private showTable: boolean = false;

  public header=["Titulo","tipo","Url","update","delete"];
  public headerAtt=["title","type","url"];
  public materials$: ReplaySubject<any> = new ReplaySubject(1);

  public title: string;
  public link: string;
  public type: string;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  

  constructor(
    private apiMaterials: MaterialsService
   
  ) {
  this.apiMaterials.getAllMaterials().subscribe(
    (mat: Materials[]) => {
      this.materials$.next(mat);

      }
  )
   }

  ngOnInit() {
  }

  public createMaterial(){
    
    this.material.title = this.title;
    this.material.url = this.link;
    this.material.type = this.type;
   
    console.log(this.material);

    return this.apiMaterials.createMaterial(this.material)
  }

  

}
