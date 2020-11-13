import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { BrandComponent } from './brand.component';


const routes: Routes = [
    { path: 'admin', component: BrandComponent}
];

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        RouterModule.forChild(routes),

    ],
    declarations: [
        BrandComponent
    ],
    exports: [
        RouterModule,
        BrandComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BrandModule { }
