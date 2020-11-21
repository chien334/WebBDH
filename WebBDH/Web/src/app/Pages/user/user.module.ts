import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail-product/detail.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'detail', component: DetailComponent },
    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [
    UserComponent,
    HomeComponent,
    DetailComponent
  ],
  exports: [
    RouterModule,
    UserComponent,
    HomeComponent,
    DetailComponent
  ]
})
export class UserModule { }
