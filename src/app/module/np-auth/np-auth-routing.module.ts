import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NpAuthComponent } from './components/board/np-auth.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [{ 
  path: '', component: NpAuthComponent,
  children: [
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: SigninComponent},
    {path: '', component: SigninComponent}
  ]

 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpAuthRoutingModule { }
