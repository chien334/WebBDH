import { Component, ViewChild } from '@angular/core';
import { Ng2SmartTableComponent } from 'ng2-smart-table';
import { BrandDialogComponent } from 'src/app/Components/brand-dialog.component';
import { ImageDialogComponent } from 'src/app/Components/image-dialog.component';
import { InputNumberComponent } from 'src/app/Components/input-number.component';
import { LoaiDayDialogComponent } from 'src/app/Components/loai-day-dialog.component';
import { MatDHDialogComponent } from 'src/app/Components/mat-dong-ho-dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent {
  createApi = 'products/create';
  editApi = 'products/update';
  deleteApi = 'products/delete';
  searchApi = 'products/search';
  columns = {
    index: {
      title: 'sr_no',
      type: 'text',
      addable: false,
      editable: false,
      valuePrepareFunction: (value, row, cell) => {
        return cell.row.index + 1;
      }
    },
    id: {
      title: 'ID Product',
      type: 'number',
      addable: false,
      editable: false,
      renderComponent: ImageDialogComponent
    },
    name: {
      title: 'Full Name',
      type: 'text',
    },
    idLoaiDay: {
      title: 'loaiDay',
      editor: {
        type: 'custom',
        component: LoaiDayDialogComponent
      }
    },
    idMatDongHo: {
      title: 'matDongHo',
      type: 'text',
      editor: {
        type: 'custom',
        component: MatDHDialogComponent
      }
    },
    idBrand: {
      title: 'brand',
      editor: {
        type: 'custom',
        component: BrandDialogComponent
      }
    },
    description: {
      title: 'description'
    },
    color: {
      title: 'color'
    },
    price: {
      title: 'price',
      type: 'number',
      editor: {
        type: 'custom',
        component: InputNumberComponent
      }
    },
    weight: {
      title: 'weight',
      type: 'number',
      editor: {
        type: 'custom',
        component: InputNumberComponent
      }
    },
  };
}
