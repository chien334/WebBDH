import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Ng2SmartTableComponent } from 'ng2-smart-table';

@Component({
  selector: 'app-home',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnChanges, OnInit, AfterViewInit {

  @ViewChild('ng2table') table: Ng2SmartTableComponent;
  defaultSettings = {
    mode: 'inline',
    selectMode: 'single',
    hideHeader: false,
    hideSubHeader: false,
    actions: {
      columnTitle: '',
      add: false,
      edit: false,
      delete: false,
      custom: [],
      position: 'left',
    },
    add: {
      addButtonContent: '<i class= "fa fa-plus"></i>',
      createButtonContent: '<i class= "fa fa-plus"></i>',
      cancelButtonContent: '<i class= "fa fa-plus"></i>',
      confirmCreate: '<i class= "fa fa-plus"></i>',
    },
    edit: {
      addButtonContent: '<i class= "fa fa-plus"></i>',
      createButtonContent: '<i class= "fa fa-plus"></i>',
      cancelButtonContent: '<i class= "fa fa-plus"></i>',
      confirmCreate: '<i class= "fa fa-plus"></i>',
    },
    delete: {
      addButtonContent: '<i class= "fa fa-plus"></i>',
      createButtonContent: '<i class= "fa fa-plus"></i>',

    },
    noDataMessage: 'No data found',
    columns: {},
    pager: {
      display: true,
      perPage: 10,
    },
    rowClassFunction: () => '',
  };
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
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  createDataSource(): any {
  }
}
