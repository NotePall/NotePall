import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NpUserComponent } from './np-user.component';

const routes: Routes = [{ path: '', component: NpUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUserRoutingModule { }
