import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  visible!: boolean;
  constructor(
    private router: Router,
    private noteService: NoteService
  ) { }

  ngOnInit(): void {
  }

  createNote = (): void => {

  }

  openCreateModal = (): void => {
    this.visible = true
  }

}
