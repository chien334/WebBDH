import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { TagComponent } from './tag.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProductModule } from './list-product/list-product.module';
const routes: Routes = [
  {
    path: '', component: TagComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgZorroAntdModule,
  ],
  declarations: [
    ListProductComponent
  ],
  exports: [
    RouterModule,
    ListProductComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TagModule { }
