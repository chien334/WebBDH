import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DefaultEditor, ViewCell } from 'ng2-smart-table';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
    selector: 'app-home',
    template: `
  <select nz-dropdown [(ngModel)]="selectedQuantity" (change)="updatedata($event)">
    <option *ngFor="let country of options; index as i" [value]="country.id">{{country.name}}</option>
  </select>
  `,
    styles: [``]
})
export class LoaiDayDialogComponent extends DefaultEditor implements OnInit, ViewCell {
    @Input() value: any;
    @Input() rowData: any;
    URL = 'https://localhost:44399/admin/api/loaidays/';
    selectedQuantity: any;
    loaiDayModel:any;
    options = [];
    constructor(private http: HttpClient) {
        super();
    }
    ngOnInit(): void {
        const baseRequest = {
            page: 1,
            pageSize: 20,
            entity: {}
        };
        this.postRequest(this.URL +'search', baseRequest)
            .subscribe(
                res => {
                    this.options = res;
                },
                () => console.log('HTTP request complete.')
            );
        this.getModel();
    }
    getModel(): void {
        const baseRequest1 = {
            page: 1,
            pageSize: 20,
            entity: {
                name: this.cell.getValue()
            }
        };
        this.postRequest(this.URL + 'searchModel', baseRequest1)
            .subscribe(
                res => {
                    this.loaiDayModel = res;
                    this.selectedQuantity = this.loaiDayModel.id;
                    this.cell.newValue = Number(this.loaiDayModel.id);
                },
                () => console.log('HTTP request complete.')
            );
    }
    updatedata(event: any): void {
        this.selectedQuantity = event.target.value;
        if (this.selectedQuantity === null) {
            this.selectedQuantity = 1;
        }
        this.cell.newValue = Number(this.selectedQuantity);
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
}
