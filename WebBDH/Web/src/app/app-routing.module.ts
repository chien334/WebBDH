import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './Pages/admin/admin.component';
import { HomeComponent } from './Pages/user/home/home.component';
import { UserComponent } from './Pages/user/user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
