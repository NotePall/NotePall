import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./module/np-auth/np-auth.module').then(m => m.NpAuthModule) }, { path: 'user', loadChildren: () => import('./module/np-user/np-user.module').then(m => m.NpUserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
