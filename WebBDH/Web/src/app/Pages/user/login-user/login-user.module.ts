import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { LoginUserComponent } from './login-user.component';

const routes: Routes = [
    { path: 'loginuser', component: LoginUserComponent}
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
        LoginUserComponent
    ],
    exports: [
        RouterModule,
        LoginUserComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginUserModule { }
