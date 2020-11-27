import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './Pages/admin/admin.component';
import { UserComponent } from './Pages/user/user.component';
import { DetailComponent } from './Pages/user/detail-product/detail.component';
import { RegisterUserComponent } from './Pages/user/register/register.component';
import { LoginAdminComponent } from './Pages/admin/login-admin/login-admin.component';
import { LoginUserComponent } from './Pages/user/login-user/login-user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '', component: UserComponent },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'register',
    component: RegisterUserComponent,
  },
  {
    path: 'loginadmin',
    component: LoginAdminComponent,
  },
  {
    path: 'loginuser',
    component: LoginUserComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
