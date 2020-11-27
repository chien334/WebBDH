import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { CardComponent } from './card.component';
import { CarouselComponent } from './carousel.component';
import { ListCardComponent } from './list-card.component';
import { UploadComponent } from './upload/upload.component';


@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
    ],
    declarations: [
        CardComponent,
        UploadComponent,
        CarouselComponent,
        ListCardComponent
    ],
    exports: [
        CardComponent,
        UploadComponent,
        CarouselComponent,
        ListCardComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
