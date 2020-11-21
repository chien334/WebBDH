import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './Pages/admin/admin.component';
import { DetailComponent } from './Pages/user/detail-product/detail.component';
import { HomeComponent } from './Pages/user/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '', component: HomeComponent },
  { path: 'detail', component: DetailComponent },
  {
    path: 'admin',
    component: AdminComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
