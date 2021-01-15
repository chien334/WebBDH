import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentModule } from 'src/app/Components/component.module';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { UserOrderComponent } from './user-order.component';


const routes: Routes = [
    { path: 'admin', component: UserOrderComponent}
];

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        RouterModule.forChild(routes),
        ComponentModule,
        HttpClientModule,
        ReactiveFormsModule,
        Ng2SmartTableModule
    ],
    declarations: [
        UserOrderComponent
    ],
    exports: [
        RouterModule,
        UserOrderComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserOrderModule { }
