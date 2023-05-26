import { Component, Input, OnInit } from '@angular/core';
import { StickyNote } from 'src/app/models/stikynote.model';

@Component({
  selector: 'app-stick-note',
  template: `
    <div class="stickynote" style="background-color: red;">
        <div class="sticky-top">
            <i class="pi pi-heart"></i>
        </div>
        <div class="sticky-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aspernatur
            magnam non, repudiandae nulla excepturi quasi dolore cupiditate et minus iure?</div>
        <div class="sticky-footer">
            <div class="date">Tue 19</div>
            <div class="edit"><i class="pi pi-file-edit"></i></div>
        </div>
    </div>
  `,
  styleUrls: ['./stick-note.component.scss']
})
export class StickNoteComponent implements OnInit {

  @Input() stickynote! : StickyNote;
  constructor() { }

  ngOnInit(): void {
  }

}
