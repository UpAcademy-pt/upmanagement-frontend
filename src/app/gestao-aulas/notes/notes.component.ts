import { Component, OnInit, TemplateRef } from '@angular/core';
import { Note } from '../shared/models/note/note';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ServiceGeneralService } from '../shared/services/service-general.service';
import { ReplaySubject } from 'rxjs';
import { DataService } from '../shared/services/data.service';
import { NotesService } from '../shared/services/notes.service';
import { faEdit, faTrashAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  modalRef: BsModalRef;
  private notes: Note[];
  private note: Note = new Note();
  private notes$: ReplaySubject<Note[]> = new ReplaySubject();
  private editValid: Boolean = true;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faUserPlus = faUserPlus;

  private title: string;
  private description: string;
  private editionId: number;
	private lessonId: number;

  constructor(
    private serviceApi: ServiceGeneralService,
    private accountApi: ServiceGeneralService,
    private notesAPI: NotesService,
    private modalService: BsModalService,
    private dataService: DataService
  ) { 
    this.notesAPI.getByAccountId(this.accountApi.getCurrentAccountId()).subscribe(
      (note: Note[]) => {this.notes$.next(note),
      console.log(note);
      });
  }

  ngOnInit() {
  }


 /**
  * validEdit
  */
 public validEdit() {
   this.editValid = false;
   this.ngOnInit();
 }

 openModalNewNote(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}

openModalDeleteNote(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}


     /**
      * createNote
      */
     public createNote() {
       this.note.title = this.title;
       this.note.description = this.description;
       this.note.accountId = this.accountApi.getCurrentAccountId();
       this.note.editionId = this.editionId;
       this.note.lessonId = this.lessonId;
       
       console.log(this.note);
       this.dataService.createNote(this.note);
       this.note = new Note();
       this.modalRef.hide();
   }
}



