import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { BDHTableComponent } from './bdh-table/bdh-table.component';
import { CardComponent } from './card.component';
import { CarouselComponent } from './carousel.component';
import { ListCardComponent } from './list-card.component';
import { UploadComponent } from './upload/upload.component';


@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        Ng2SmartTableModule,
        HttpClientModule
    ],
    declarations: [
        CardComponent,
        UploadComponent,
        CarouselComponent,
        ListCardComponent,
        BDHTableComponent
    ],
    exports: [
        CardComponent,
        UploadComponent,
        CarouselComponent,
        ListCardComponent,
        BDHTableComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
