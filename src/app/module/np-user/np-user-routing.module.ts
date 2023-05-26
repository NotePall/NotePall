import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { NpUserComponent } from './components/dashboard/np-user.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { NoteComponent } from './components/note/note.component';
import { StickynoteComponent } from './components/stickynote/stickynote.component';
import { NotePreviewComponent } from './components/note-preview/note-preview.component';

const routes: Routes = [{ 
  path: '', component: NpUserComponent,
  children: [
    { component: NoteComponent, path: "note" },
    { component: NotePreviewComponent, path: "note/:id" },
    { component: StickynoteComponent, path: "stickynote" },
    { component: CategoriesComponent, path: "categories" },
    { component: FavoriteComponent, path: "favorite" },
    { component: StickynoteComponent, path: ""  }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUserRoutingModule { }
