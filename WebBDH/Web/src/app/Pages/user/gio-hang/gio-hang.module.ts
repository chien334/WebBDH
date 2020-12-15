import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { ComponentModule } from 'src/app/Components/component.module';
import { BrowserModule } from '@angular/platform-browser';
import { GioHangComponent } from './gio-hang.component';


const routes: Routes = [
  { path: '', component: GioHangComponent },
];

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes),
    ComponentModule,
    BrowserModule 
  ],
  declarations: [
  ],
  exports: [
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GioHangModule { }
