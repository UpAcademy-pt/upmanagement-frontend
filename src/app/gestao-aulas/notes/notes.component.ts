import { Component, OnInit, TemplateRef } from '@angular/core';
import { Note } from '../shared/models/note/note';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { Router } from '@angular/router';
import { ServiceGeneralService } from '../shared/services/service-general.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  private notes: Note[];

  constructor(
    private serviceApi: ServiceGeneralService,
    private modalService: BsModalService
  ) { 
    this.notes=this.serviceApi.getNotes();
  }

  ngOnInit() {
  }


  modalRef: BsModalRef;

  public openNoteDescription(template : TemplateRef <any>) {
    this.modalRef = this.modalService.show({template});
    this.modalRef.content.closeBtnName = 'Close';
  
  }
  }



