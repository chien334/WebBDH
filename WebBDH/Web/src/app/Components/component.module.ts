import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { CardComponent } from './card.component';
import { CarouselComponent } from './carousel.component';


@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
    ],
    declarations: [
        CardComponent,
        CarouselComponent
    ],
    exports: [
        CardComponent,
        CarouselComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
