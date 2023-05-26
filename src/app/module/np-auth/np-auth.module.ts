import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpAuthRoutingModule } from './np-auth-routing.module';
import { NpAuthComponent } from './components/board/np-auth.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NpAuthComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    NpAuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class NpAuthModule { }
