import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentModule } from 'src/app/Components/component.module';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { MatDongHoComponent } from './mat-dong-ho.component';


const routes: Routes = [
    { path: 'admin', component: MatDongHoComponent}
];

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        RouterModule.forChild(routes),
        ComponentModule
    ],
    declarations: [
        MatDongHoComponent
    ],
    exports: [
        RouterModule,
        MatDongHoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MatDongHoModule { }
