import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail-product/detail.component';
import { ComponentModule } from 'src/app/Components/component.module';
import { UserComponent } from './user.component';
import { DetailModule } from './detail-product/detail.module';
import { HomeModule } from './home/home.module';
import { TagComponent } from './tag/tag.component';
import { Component } from '@angular/core';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCardModule } from 'ng-zorro-antd/card';
import { BrowserModule } from '@angular/platform-browser';
import { GioHangComponent } from './gio-hang/gio-hang.component';
import { ListProductComponent } from './tag/list-product/list-product.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [

      { path: 'home', component: HomeComponent },
      { path: 'giohang', component: GioHangComponent },
      { path: 'detail/:id', component: DetailComponent },
      {
        path: 'tag', component: TagComponent, children: [
          { path: 'tag', pathMatch: 'full', redirectTo: '/list-product' },
          { path: 'list-product/:id', component: ListProductComponent },
          { path: 'list-product', component: ListProductComponent }
        ]
      },

    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgZorroAntdModule,
    ComponentModule,
    BrowserModule
  ],
  declarations: [
    UserComponent,
    HomeComponent,
    DetailComponent,
    TagComponent,
    GioHangComponent,
    ListProductComponent
  ],
  exports: [
    RouterModule,
    UserComponent,
    HomeComponent,
    DetailComponent,
    TagComponent,
    ListProductComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
