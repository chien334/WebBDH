import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { DetailComponent } from './detail.component';
import { ComponentModule } from 'src/app/Components/component.module';

const routes: Routes = [
  { path: '', component: DetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes),
    ComponentModule
  ],
  declarations: [
  ],
  exports: [
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailModule { }
