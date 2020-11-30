import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.less']
})
export class BrandComponent {
  createApi = 'Brand/create';
  editApi = 'Brand/update';
  deleteApi = 'Brand/delete';
  searchApi = 'Brand/search';
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
    name: {
      title: 'Full Name'
    },
    description: {
      title: 'Description'
    },
  };
}
