import { Component, OnInit, EventEmitter, Output, ViewChild, Input, AfterViewInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Ng2SmartTableComponent } from 'ng2-smart-table';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './bdh-table.component.html',
  styleUrls: ['./bdh-table.component.less']
})
export class BDHTableComponent implements OnInit, AfterViewInit {
  public LINK_API = 'https://localhost:44399/admin/api/';
  @ViewChild('ng2table') table: Ng2SmartTableComponent;
  @Input() createApi = '';
  @Input() editApi = '';
  @Input() deleteApi = '';
  @Input() searchApi = '';
  @Input() columns: Object = {};
  data = this.getdataSource();
  settings = {
    add: {
      addButtonContent: 'Add',
      createButtonContent: 'yes',
      cancelButtonContent: 'no',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: 'Edit',
      saveButtonContent: 'yes',
      cancelButtonContent: 'no',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: 'Delete',
      confirmDelete: true,
    },
    columns: {
    }
  };
  constructor(private http: HttpClient) { }
  ngAfterViewInit(): void {
    this.getdataSource();
  }
  ngOnInit(): void {
    this.settings.columns = this.columns;
  }
  getdataSource(): any {
    const baseRequest = {
      page: 1,
      pageSize: 20,
      entity: {}
    };
    this.postRequest(this.LINK_API + this.searchApi, baseRequest)
      .subscribe(
        res => {
          this.data = res;
        },
        () => console.log('HTTP request complete.')
      );
  }
  onCreateConfirm(event): void {
    const baseRequest = {
      entity: event.newData
    };
    delete baseRequest.entity.id;
    this.postRequest(this.LINK_API + this.createApi, baseRequest)
      .subscribe(
        res => {
          event.confirm.resolve(res);
        },
        err => {
          event.confirm.reject(err);
        },
        () => console.log('HTTP request complete.')
      );
    this.getdataSource();
  }

  onSaveConfirm(event): void {
    const baseRequest = {
      oldEntity: {},
      entity: event.newData
    };
    this.postRequest(this.LINK_API + this.editApi, baseRequest)
      .subscribe(
        res => {
          event.confirm.resolve(res);
        },
        err => {
          event.confirm.reject(err);
        },
        () => console.log('HTTP request complete.')
      );
    this.getdataSource();
  }

  onDeleteConfirm(event): void {
    const baseRequest = {
      entity: event.data
    };
    this.postRequest(this.LINK_API + this.deleteApi, baseRequest)
      .subscribe(
        res => {
          event.confirm.resolve(res);
        },
        err => {
          event.confirm.reject(err);
        },
        () => console.log('HTTP request complete.')
      );
    this.getdataSource();
  }
  postRequest(api: string, request: any): Observable<any> {
    return this.http.post(api, request, { observe: 'body' })
      .pipe(
        map((body: any) => {
          if (body.success) {
            return body.items;
          } else {
            throwError(body.message);
          }

        })
      );
  }
  reloadList(): void {
    // this.data.loaded = true;
    this.data = this.getdataSource();
  }
}
