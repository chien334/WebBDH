import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './loai-day.component.html',
  styleUrls: ['./loai-day.component.less']
})
export class LoaiDayComponent {
  createApi = 'loaidays/create';
  editApi = 'loaidays/update';
  deleteApi = 'loaidays/delete';
  searchApi = 'loaidays/search';
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
    description: {
      title: 'Description'
    },
  };
}
