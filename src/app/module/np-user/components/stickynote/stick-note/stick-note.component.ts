import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StickyNote } from 'src/app/models/stikynote.model';

@Component({
  selector: 'app-stick-note',
  template: `
    <div class="stickynote" style="background-color: red;">
        <div class="sticky-top">
            <i class="pi pi-heart"  (click)="onLikeClick()"></i>
        </div>
        <div class="sticky-content">{{stickynote.content}}</div>
        <div class="sticky-footer">
            <div class="date">{{stickynote.updated_at}}</div>
            <div class="edit" (click)="onLikeClick()"><i class="pi pi-file-edit"></i></div>
        </div>
    </div>
  `,
  styleUrls: ['./stick-note.component.scss']
})
export class StickNoteComponent implements OnInit {

  @Input() stickynote! : StickyNote;

  @Output() editClick: EventEmitter<void> = new EventEmitter()
  @Output() likeClick: EventEmitter<void> = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  onEditClick() {
    this.editClick.emit()
  }
  
  onLikeClick() {
    this.likeClick.emit()
  }

}
