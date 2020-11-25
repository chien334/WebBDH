import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './Pages/admin/admin.component';
import { HomeComponent } from './Pages/user/home/home.component';
import { UserComponent } from './Pages/user/user.component';
import {  ItemComponent} from './Pages/user/item/item.component';
import { DetailComponent } from './Pages/user/detail-product/detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  // {path:'',pathMatch:'item',redirectTo:'/item'},
  { path: '', component: HomeComponent },
  {
    path: 'detail',
    component: DetailComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
