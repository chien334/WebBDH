import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { AdminComponent } from './admin.component';
import { BrandComponent } from './brand/brand.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'product', component: ProductComponent },
            { path: 'brand', component: BrandComponent }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        RouterModule.forChild(routes),

    ],
    declarations: [
        AdminComponent,
        ProductComponent,
        BrandComponent
    ],
    exports: [
        RouterModule,
        AdminComponent,
        ProductComponent,
        BrandComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
