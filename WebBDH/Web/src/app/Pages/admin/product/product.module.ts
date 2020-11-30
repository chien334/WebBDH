import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentModule } from 'src/app/Components/component.module';
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
        Ng2SmartTableModule,
        FormsModule,
        ComponentModule,
        ReactiveFormsModule,
        BrowserModule,
        HttpClientModule
    ],
    declarations: [
        ProductComponent,
    ],
    exports: [
        RouterModule,
        ProductComponent,

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule { }
