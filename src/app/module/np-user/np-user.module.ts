import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUserRoutingModule } from './np-user-routing.module';
import { NpUserComponent } from './components/dashboard/np-user.component';
import { NoteComponent } from './components/note/note.component';
import { StickynoteComponent } from './components/stickynote/stickynote.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FavoriteComponent } from './components/favorite/favorite.component';


@NgModule({
  declarations: [
    NpUserComponent,
    NoteComponent,
    StickynoteComponent,
    CategoriesComponent,
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    NpUserRoutingModule
  ]
})
export class NpUserModule { }
