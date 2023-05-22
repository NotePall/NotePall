import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpAuthRoutingModule } from './np-auth-routing.module';
import { NpAuthComponent } from './components/board/np-auth.component';


@NgModule({
  declarations: [
    NpAuthComponent
  ],
  imports: [
    CommonModule,
    NpAuthRoutingModule
  ]
})
export class NpAuthModule { }
