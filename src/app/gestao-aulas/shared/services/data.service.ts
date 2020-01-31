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
  public notes$: ReplaySubject<Note[]> = new ReplaySubject(1);
  public notes = [];

  constructor(
    private notesAPI: NotesService,
    private accountApi: ServiceGeneralService,
  ) {
  }

  /**
   * updateNotes$
   */
  public updateNotes$() {
    console.log(this.notes);
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
        console.log(result);
        note.id = result;
        this.notes.push(note);
        this.updateNotes$();
      }
    );
  }


  public getNotesByAccountId(id: number) {
    this.notesAPI.getByAccountId(this.accountApi.getCurrentAccountId()).subscribe(
      (notes: Note[]) => {
        this.notes = notes;
        this.notes$.next(notes);
        console.log(notes);
      });
  }

  /**
   * deleteNoteById
   */
  public deleteNoteById(id: number) {
    this.notesAPI.delete(id).subscribe(
      () => {
        const noteIndex = this.notes.map((note) => note.id).indexOf(id);
        if (noteIndex !== -1) {
          this.notes.splice(noteIndex, 1);
        }
        this.updateNotes$();
      }
    );
  }

}



