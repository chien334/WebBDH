import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { BDHTableComponent } from './bdh-table/bdh-table.component';
import { BrandDialogComponent } from './brand-dialog.component';
import { CardComponent } from './card.component';
import { CarouselComponent } from './carousel.component';
import { ImageDialogComponent } from './image-dialog.component';
import { InputNumberComponent } from './input-number.component';
import { ListCardComponent } from './list-card.component';
import { LoaiDayDialogComponent } from './loai-day-dialog.component';
import { MatDHDialogComponent } from './mat-dong-ho-dialog.component';
import { UploadComponent } from './upload/upload.component';


@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        Ng2SmartTableModule,
        HttpClientModule,
        FormsModule
    ],
    declarations: [
        CardComponent,
        UploadComponent,
        CarouselComponent,
        ListCardComponent,
        BDHTableComponent,
        MatDHDialogComponent,
        ImageDialogComponent,
        LoaiDayDialogComponent,
        BrandDialogComponent,
        InputNumberComponent
    ],
    exports: [
        CardComponent,
        UploadComponent,
        CarouselComponent,
        ListCardComponent,
        BDHTableComponent,
        MatDHDialogComponent,
        ImageDialogComponent,
        LoaiDayDialogComponent,
        BrandDialogComponent,
        InputNumberComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
