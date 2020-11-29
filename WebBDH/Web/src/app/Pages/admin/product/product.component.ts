import { Component, ViewChild } from '@angular/core';
import { Ng2SmartTableComponent } from 'ng2-smart-table';

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
      valuePrepareFunction: (value, row, cell) => {
        return cell.row.index + 1;
      }
    },
    name: {
      title: 'Full Name'
    },
    loaiDay: {
      title: 'loaiDay'
    },
    matDongHo: {
      title: 'matDongHo'
    },
    brand: {
      title: 'brand'
    },
    description: {
      title: 'description'
    },
    color: {
      title: 'color'
    },
    price: {
      title: 'price'
    },
    weight: {
      title: 'weight'
    },
  };
}
