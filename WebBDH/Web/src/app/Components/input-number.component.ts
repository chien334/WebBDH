import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DefaultEditor, ViewCell } from 'ng2-smart-table';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    template: `
    <input type='number' #name name="num" id="num" min='0' (change)="updatedata($event)" class="form-control"/>
  `,
    styles: [``]
})
export class InputNumberComponent extends DefaultEditor implements OnInit, ViewCell, AfterViewInit {
    @Input() value: any;
    @Input() rowData: any;
    @ViewChild('name') name: ElementRef;
    num: number = 0;
    URL = 'https://localhost:44399/admin/api/loaidays/search';
    constructor(private http: HttpClient) {
        super();
    }
    ngAfterViewInit(): void {
        this.name.nativeElement.value = this.num;
    }
    ngOnInit(): void {
        this.num = this.cell.getValue();
    }
    updatedata(event: any): void {
        this.cell.newValue = Number(event.target.value);
    }
}
