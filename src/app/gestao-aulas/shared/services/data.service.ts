import { Injectable } from '@angular/core';
import { Note } from '../models/note/note';
import { ReplaySubject } from 'rxjs';
import { NotesService } from './notes.service';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { ServiceGeneralService } from './service-general.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public note: Note;
  public notes$: ReplaySubject<Note[]> = new ReplaySubject();
  private notes = [];

  constructor(
    private notesAPI: NotesService,
    private accountApi: ServiceGeneralService,
  ) {
    
  }

  /**
   * updateNotes$
   */
  public updateNotes$() {
    this.notes$.next(this.notes);
  }

  /**
   * updateNotes
   */
  public updateNotes() {
    this.notesAPI.getByAccountId(this.accountApi.getCurrentAccountId()).subscribe(
      (res: any) => {
        this.notes = res;
        this.updateNotes$();
      }
    );
  }

  /**
   * createNote
   */
  public createNote(note: Note) {
    this.notesAPI.create(note).subscribe(
      (result: number) => {
        this.note.id = result;
        this.notes.push(note);
        this.updateNotes$();
      }
    )
  }

  // public createProduct(product: Product) {
  //   this.productApi.create(product).subscribe(
  //     (result: number) => {
  //       product.id = result;
  //       this.products.push(product);
  //       this.updateProducts$();
  //     }
  //   );
  // }
  }





