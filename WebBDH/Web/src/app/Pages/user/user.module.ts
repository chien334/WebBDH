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
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'detail', component: DetailComponent },
      { path: 'tag', component: TagComponent },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgZorroAntdModule,
    ComponentModule,
  ],
  declarations: [
    UserComponent,
    HomeComponent,
    DetailComponent,
    TagComponent
  ],
  exports: [
    RouterModule,
    UserComponent,
    HomeComponent,
    DetailComponent,
    TagComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
