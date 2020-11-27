import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
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
        Ng2SmartTableModule
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
