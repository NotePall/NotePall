import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'auth', loadChildren: () => import('./module/np-auth/np-auth.module').then(m => m.NpAuthModule) }, 
  { path: 'user', loadChildren: () => import('./module/np-user/np-user.module').then(m => m.NpUserModule) },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
