import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NpAuthComponent } from './np-auth.component';

const routes: Routes = [{ path: '', component: NpAuthComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpAuthRoutingModule { }
