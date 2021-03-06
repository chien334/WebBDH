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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaiDayComponent } from './loai-day/loai-day.component';
import { MatDongHoComponent } from './mat-dong-ho/mat-dong-ho.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UserOrderComponent } from './user-order/user-order.component';
const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'product', component: ProductComponent },
            { path: 'brand', component: BrandComponent },
            { path: 'mat-dong-ho', component: MatDongHoComponent },
            { path: 'loai-day', component: LoaiDayComponent },
            { path: 'user-order', component: UserOrderComponent },
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
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
        AdminComponent,
        ProductComponent,
        BrandComponent,
        MatDongHoComponent,
        LoaiDayComponent,
        UserOrderComponent
    ],
    exports: [
        RouterModule,
        AdminComponent,
        ProductComponent,
        BrandComponent,
        MatDongHoComponent,
        LoaiDayComponent,
        UserOrderComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
