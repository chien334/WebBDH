import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DefaultEditor, ViewCell } from 'ng2-smart-table';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
    selector: 'app-home',
    template: `
  <select (ngModel)="selectedQuantity">
    <option [value]="null" disabled>Select Country</option>
    <option *ngFor="let country of options; index as i" [ngValue]="country.id">{{country.name}}</option>
  </select>
  `,
    styles: [``]
})
export class MatDHDialogComponent extends DefaultEditor implements OnInit, ViewCell {
    @Input() value: any;
    @Input() rowData: any;
    URL = 'https://localhost:44399/admin/api/matdonghos/search';
    selectedQuantity: 0;
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
        this.postRequest(this.URL, baseRequest)
            .subscribe(
                res => {
                    this.options = res;
                },
                () => console.log('HTTP request complete.')
            );
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
