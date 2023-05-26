import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUserRoutingModule } from './np-user-routing.module';
import { NpUserComponent } from './components/dashboard/np-user.component';
import { NoteComponent } from './components/note/note.component';
import { StickynoteComponent } from './components/stickynote/stickynote.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { NpSharedModule } from '../np-shared/np-shared.module';
import { NotePreviewComponent } from './components/note-preview/note-preview.component';
import { StickNoteComponent } from './components/stickynote/stick-note/stick-note.component';


@NgModule({
  declarations: [
    NpUserComponent,
    NoteComponent,
    StickynoteComponent,
    CategoriesComponent,
    FavoriteComponent,
    NotePreviewComponent,
    StickNoteComponent
  ],
  imports: [
    CommonModule,
    NpUserRoutingModule,
    NpSharedModule
  ]
})
export class NpUserModule { }
