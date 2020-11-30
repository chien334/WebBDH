import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './mat-dong-ho.component.html',
  styleUrls: ['./mat-dong-ho.component.less']
})
export class MatDongHoComponent {
  createApi = 'matdonghos/create';
  editApi = 'matdonghos/update';
  deleteApi = 'matdonghos/delete';
  searchApi = 'matdonghos/search';
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
