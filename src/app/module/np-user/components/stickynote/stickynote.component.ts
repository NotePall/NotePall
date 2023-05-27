import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Color } from 'src/app/models/color.model';
import { Label } from 'src/app/models/label.model';
import { StickyNote } from 'src/app/models/stikynote.model';
import { StickynoteService } from 'src/app/service/stickynote.service';
import { addToMessageService } from 'src/app/utils/message.utils';

@Component({
  selector: 'app-stickynote',
  templateUrl: './stickynote.component.html',
  styleUrls: ['./stickynote.component.scss']
})
export class StickynoteComponent implements OnInit {

  username!: string;
  colors!: Color[];
  selectedColor!: string;

  labels!: Label[];
  selectedLabel!: string;

  stickNoteForm!: FormGroup;
  updateStckyNoteForm!: FormGroup;
  updatedData!: StickyNote

  stickNotes!: StickyNote[]

  visible!: boolean;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private stickyNoteService: StickynoteService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.colors = [
      {name: 'Orange', color: "background-color: orange;"},
      {name: 'Blue', color: "background-color: blue;"},
      {name: 'Green', color: "background-color: green;"},
      {name: 'Grey', color: "background-color: greey;"},
      {name: 'Yellow', color: "background-color: yellow;"},
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

    this.updateStckyNoteForm = this.fb.group({
      content: new FormControl(""),
      color: new FormControl(""),
      label: new FormControl(""),
      favorite: new FormControl<boolean>(false)
    })
    
    this.stickyNoteService.getStickyNotes().subscribe({
      next: res => {
        this.stickNotes = res;
        console.log(res)
      }
    })
  }

  onLikedStikyNote = (stickNote: StickyNote) => {
    alert("liked")
  }

  onCreateStickyNote = ():void => {
    const stickyData = {
      content: this.stickNoteForm.get(['content'])?.value,
      label: this.stickNoteForm.get(['label'])?.value,
      color: this.stickNoteForm.get(['color'])?.value,
      favorite: this.stickNoteForm.get(['favorite'])?.value
    }


    const sticky: StickyNote = {
      content: stickyData.content,
      label: stickyData.label.label,
      favorite: stickyData.favorite,
      color: stickyData.color.color
    }

    this.stickyNoteService.createStickyNote(sticky).subscribe({
      next: res => {
        console.log(res)
        this.stickNotes.push(res);
        addToMessageService(this.messageService, 'success', 'Success', `Created Note!`)
      },
      error: err => {
        addToMessageService(this.messageService, 'error', 'Success', `Note was not created, try again!`)
      }
    })
  }

  // handles edit option

  onEditStikyNote = (stickynote: StickyNote) => {
    this.visible = true

    this.updateStckyNoteForm.patchValue({
      content: stickynote.content,
      color: stickynote.color,
      label: stickynote.label,
      favorite: stickynote.favorite
    })

    this.updatedData = stickynote
  }

  onUpdateSickyNote = (): void => {
    // updates the note
    const stickyData = {
      content: this.updateStckyNoteForm.get(['content'])?.value,
      label: this.updateStckyNoteForm.get(['label'])?.value,
      color: this.updateStckyNoteForm.get(['color'])?.value,
      favorite: this.updateStckyNoteForm.get(['favorite'])?.value,
    }

    const sticky: StickyNote = {
      content: stickyData.content,
      label: stickyData.label.label,
      favorite: stickyData.favorite,
      color: stickyData.color.color
    }

    const id = this.updatedData.id
    console.log(sticky)
    if (typeof id == 'number') {
      this.stickyNoteService.updateStickyNote(sticky, id).subscribe({
        next: res => {
          addToMessageService(this.messageService, 'success', 'Success', `Updated Note!`)
          console.log(res)
        },
        error: err => {
          addToMessageService(this.messageService, 'error', 'Success', `Note not updated`)
          console.log(err)
        }
      })
    }

    this.visible = false;
  }

  onDeleteNote = () => {
    const id = this.updatedData.id
    if (typeof id == 'number') {
      this.stickyNoteService.deleteStickyNote(id).subscribe({
        next: res => {
          addToMessageService(this.messageService, 'success', 'Success', `Deleted Note!`)
          console.log(res)
        },
        error: err => {
          addToMessageService(this.messageService, 'error', 'Success', `Note was not deleted`)
          console.log(err)
        }
      })
    }
    this.visible = false;
    this.ngOnInit()
  }

  openEditeModel = (): void => {
    this.visible = true
  }
}
