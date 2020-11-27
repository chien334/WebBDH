import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentModule } from 'src/app/Components/component.module';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { AdminComponent } from './admin.component';
import { BrandComponent } from './brand/brand.component';
import { ProductComponent } from './product/product.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from 'ng2-completer';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'product', component: ProductComponent },
            { path: 'brand', component: BrandComponent },
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        RouterModule.forChild(routes),
        ComponentModule,
        Ng2SmartTableModule,
        Ng2CompleterModule,
        FormsModule
    ],
    declarations: [
        AdminComponent,
        ProductComponent,
        BrandComponent,
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
