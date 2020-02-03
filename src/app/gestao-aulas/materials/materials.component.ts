import { Component, OnInit, TemplateRef } from '@angular/core';
import { Materials } from '../shared/models/mamaterials/materials';
import { ReplaySubject } from 'rxjs';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MaterialsService } from '../shared/services/materials.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  private materials: Materials[]= [];
  private material: Materials = new Materials();
  private showTable: boolean = false;

  public header=["Titulo","Tecnologia","Url","update","delete"];
  public headerAtt=["title","type","url"];
  public materials$: ReplaySubject<any> = new ReplaySubject(1);
  private rowMaterialToDelete: number;
  public updateTo: number;
  private materialToUpdate: Materials = new Materials();

  modalRef: BsModalRef;
  public title: string;
  public link: string;
  public type: string;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  

  constructor(
    private apiMaterials: MaterialsService,
    private modalService: BsModalService,
   
  ) {
  this.apiMaterials.getAllMaterials().subscribe(
    (mat: Materials[]) => {
      this.materials$.next(mat);
      this.materials = mat
      console.log(this.materials);
      }
  )
   }

  ngOnInit() {
  }
  public updateObs(){
    this.materials$.next(this.materials)
  }

  public createMaterial(){
    
    this.material.title = this.title;
    this.material.url = this.link;
    this.material.type = this.type;
   
    console.log(this.material);

    return this.apiMaterials.createMaterial(this.material).subscribe(
      (msg: string) => {
        
        this.updateObs()
        console.log(msg);
      },(error: string) => {
        console.log(error);
      }
    )
  }

  public deleteById(){
    this.apiMaterials.deleteById(this.materials[this.rowMaterialToDelete].id).subscribe(
      (msg: string) => {
        this.materials.splice(this.rowMaterialToDelete,1);
        this.updateObs()
        console.log(msg);
        if (this.materials.length <= 0) {
          this.showTable = false;
        }
      }, (error: string) => {
        console.log(error);
      }
    )
    this.modalRef.hide();
  }

  public updateMat(){
    console.log(this.materialToUpdate);
    this.apiMaterials.updateMaterial(this.materialToUpdate).subscribe(
      (msg: string) => {
        this.materials[this.updateTo] = this.materialToUpdate;
        this.updateObs()
        console.log(msg);
      }, (error: string) => {
        console.log(error);
      }
    )
    this.modalRef.hide();
  }

  openModalConfirmDeleteMaterial(template: TemplateRef<any>, rowIndex: number) {
    this.rowMaterialToDelete = rowIndex;
    this.modalRef = this.modalService.show(template);
  }
  openModalUpdateMaterial(template: TemplateRef<any>, rowIndex: number) {
    this.materialToUpdate = { ...this.materials[rowIndex] };
    this.updateTo = rowIndex;
    this.modalRef = this.modalService.show(template);
  }

}
