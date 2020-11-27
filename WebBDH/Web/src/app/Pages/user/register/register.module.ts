import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { RegisterUserComponent } from './register.component';

const routes: Routes = [
    { path: 'register', component: RegisterUserComponent}
];

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        RouterModule.forChild(routes),
        Ng2SmartTableModule,
        FormsModule
    ],
    declarations: [
        RegisterUserComponent
    ],
    exports: [
        RouterModule,
        RegisterUserComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterModule { }
