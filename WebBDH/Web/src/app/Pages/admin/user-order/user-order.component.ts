import { Component } from '@angular/core';
import { ListOrderComponent } from 'src/app/Components/list-order-item.component';

@Component({
  selector: 'app-home',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.less']
})
export class UserOrderComponent {
  createApi = '';
  editApi = '';
  deleteApi = '';
  searchApi = 'UserOrder/search';
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
    firstName: {
      title: 'First Name'
    },
    lastName: {
      title: 'Last Name'
    },
    phone: {
      title: 'phone'
    },
    city: {
      title: 'city'
    },
    province: {
      title: 'province'
    },
    total: {
      title: 'total'
    },
    id: {
      title: 'Detail List Product',
      type: 'custom',
      addable: false,
      editable: false,
      renderComponent: ListOrderComponent
    },
  };
}
