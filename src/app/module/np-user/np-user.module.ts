import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUserRoutingModule } from './np-user-routing.module';
import { NpUserComponent } from './components/dashboard/np-user.component';


@NgModule({
  declarations: [
    NpUserComponent
  ],
  imports: [
    CommonModule,
    NpUserRoutingModule
  ]
})
export class NpUserModule { }
