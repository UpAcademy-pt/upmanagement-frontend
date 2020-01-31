import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Materials } from '../models/mamaterials/materials';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  private url ='http://localhost:8080/coreFinalProject/aulas/materials/'

  constructor(
    private http: HttpClient,
  ) { }

  public createMaterial(material: Materials){
    console.log(material);
    return this.http.post(this.url, material).subscribe(
      (msg: string) => {
        console.log(msg);
      },(error: string) => {
        console.log(error);
      }
    )
  }

  public getAllMaterials(){
    return this.http.get(this.url)
  }

  public deleteById(id){
    return this.http.delete(this.url+ id)
  }

  public updateMaterial(material: Materials){
    return this.http.put(this.url, material)
  }

}
