import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { LoginAdminComponent } from './login-admin.component';

const routes: Routes = [
    { path: 'loginadmin', component: LoginAdminComponent}
];

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        RouterModule.forChild(routes),
        FormsModule,
    ],
    declarations: [
        LoginAdminComponent
    ],
    exports: [
        RouterModule,
        LoginAdminComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginAdminModule { }
