import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentModule } from 'src/app/Components/component.module';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { MatDHDialogComponent } from './dialog-product/mat-dong-ho-dialog.component';
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
        ReactiveFormsModule
    ],
    declarations: [
        ProductComponent,
        MatDHDialogComponent
    ],
    exports: [
        RouterModule,
        ProductComponent,
        MatDHDialogComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule { }
