import { Component, OnInit } from '@angular/core';
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

  stickNote!: StickyNote[]

  constructor() { }

  ngOnInit(): void {
    this.colors = [
      {name: 'orange', color: "rgba-color"},
      {name: 'blue', color: "rgba-color"},
      {name: 'green', color: "rgba-color"},
      {name: 'grey', color: "rgba-color"},
      {name: 'yellow', color: "rgba-color"},
    ]

    this.labels = [
      {name: "fun", label: "fun"},
      {name: "happy", label: "happy"},
      {name: "sad", label: "sad"},
      {name: "love", label: "love"},
    ]
  }

}
