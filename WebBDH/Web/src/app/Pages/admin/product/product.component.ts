import { Component, ViewChild } from '@angular/core';
import { Ng2SmartTableComponent } from 'ng2-smart-table';

@Component({
  selector: 'app-home',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent {
  createApi = 'product/create';
  editApi = 'product/update';
  deleteApi = 'product/delete';
  searchApi = 'product/search';
  columns = {
    name: {
      title: 'Full Name'
    },
    description: {
      title: 'Description'
    },
  };
}
