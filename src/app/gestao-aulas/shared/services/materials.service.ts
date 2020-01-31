import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Materials } from '../models/mamaterials/materials';
import { NgForm} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  private url ='http://localhost:8080/coreFinalProject/aulas/materials/'

  constructor(
    private http: HttpClient,
  ) { }

  public createMaterial(material: Materials){
    return this.http.post(this.url, material)
  }

  public getAllMaterials(){
    return this.http.get(this.url)
  }

  public deleteById(id: number){
    return this.http.delete(this.url+ id)
  }

  public updateMaterial(material: Materials){
    return this.http.put(this.url, material)
  }

}
