import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { DetailComponent } from './detail.component';

const routes: Routes = [
  { path: '', component: DetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [
    DetailComponent
  ],
  exports: [
    RouterModule,
    DetailComponent
  ]
})
export class DetailModule { }
