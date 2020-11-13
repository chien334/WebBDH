import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { ProductComponent } from './product.component';

const routes: Routes = [
    { path: 'admin', component: ProductComponent}
];

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        RouterModule.forChild(routes),

    ],
    declarations: [
        ProductComponent
    ],
    exports: [
        RouterModule,
        ProductComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule { }
