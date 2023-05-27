import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Color } from 'src/app/models/color.model';
import { Label } from 'src/app/models/label.model';
import { StickyNote } from 'src/app/models/stikynote.model';

@Component({
  selector: 'app-stickynote',
  templateUrl: './stickynote.component.html',
  styleUrls: ['./stickynote.component.scss']
})
export class StickynoteComponent implements OnInit {

  colors!: Color[];
  selectedColor!: string;

  labels!: Label[];
  selectedLabel!: string;

  stickNoteForm!: FormGroup

  stickNotes!: StickyNote[]

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.colors = [
      {name: 'Orange', color: "orange"},
      {name: 'Blue', color: "blue"},
      {name: 'Green', color: "green"},
      {name: 'Grey', color: "grey"},
      {name: 'Yellow', color: "yellow"},
    ]

    this.labels = [
      {name: "Fun", label: "fun"},
      {name: "Happy", label: "happy"},
      {name: "Sad", label: "sad"},
      {name: "Love", label: "love"},
      {name: "Business", label: "business"},
      {name: "Idea", label: "idea"}
    ]


    // fetch the data of the notes and populate this page
    this.stickNoteForm = this.fb.group({
      content: new FormControl(""),
      color: new FormControl(""),
      label: new FormControl(""),
      favorite: new FormControl<boolean>(false)
    })
  }

  onEditStikyNote = (stickynote: StickyNote) => {
    this.router.navigate(['/stickynote', stickynote.id])
  }

  onLikedStikyNote = (stickNote: StickyNote) => {
    alert("liked")
  }

  onCreateStickyNote = ():void => {
    const stickyData = {
      content: this.stickNoteForm.get(['content'])?.value,
      label: this.stickNoteForm.get(['label'])?.value,
      color: this.stickNoteForm.get(['color'])?.value,
      favorite: this.stickNoteForm.get(['favorite'])?.value,
    }

    const sticky: StickyNote = {
      content: stickyData.content,
      label: stickyData.label.label,
      favorite: stickyData.favorite,
      color: stickyData.color.color

    }

    console.log(sticky)
  }
}
