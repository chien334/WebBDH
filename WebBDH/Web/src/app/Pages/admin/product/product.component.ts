import { Component, ViewChild } from '@angular/core';
import { Ng2SmartTableComponent } from 'ng2-smart-table';

@Component({
  selector: 'app-home',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent {
  @ViewChild('ng2table') table: Ng2SmartTableComponent;
  dataSource: any = this.createDataSource();
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };
  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv'
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz'
    }
  ];
  createDataSource(): any {
  }
}
