import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { TagComponent } from './tag.component';
const routes: Routes = [
  { path: '', component: TagComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgZorroAntdModule
  ],
  declarations: [
  ],
  exports: [
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TagModule { }
