import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { DefaultEditor, ViewCell } from 'ng2-smart-table';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageModel } from 'src/app/models/image.model';
import { ImageToCreate } from 'src/app/models/imageToCreate.model';


@Component({
    selector: 'app-home',
    template: `
    <button nz-button nzType="primary" (click)="createTplModal(tplTitle, tplContent, tplFooter)">
      <span>List sản phẩm : {{value}}</span>
    </button>
    <ng-template #tplTitle>
      <span>Title Template</span>
    </ng-template>
    <ng-template #tplContent let-params>
    <article class="container container-fluid">
        <section class="users" *ngIf="!isCreate">
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">FirstName</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let user of users">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.price}}</td>
                    <td>{{user.quantity}}</td>
                    <td>{{user.firstName}}</td>
                </tr>
            </tbody>
            </table>
        </section>
    </article>
    </ng-template>
    <ng-template #tplFooter let-ref="modalRef">
      <button nz-button (click)="destroyTplModal(ref)">OK</button>
      <button nz-button nzType="primary" (click)="destroyTplModal(ref)">Close</button>
    </ng-template>

    `,
    styles: [``]
})
export class ListOrderComponent extends DefaultEditor implements OnInit, ViewCell {
    @Input() value: any;
    @Input() rowData: any;
    public isCreate = false;
    public stt: number;
    public idProduct: number;
    public user: ImageToCreate;
    public users: [];
    public response: { dbPath: '' };
    URL = 'https://localhost:44399/admin/api/UserOrder/';
    isVisible = false;
    constructor(private http: HttpClient, private modal: NzModalService) {
        super();
    }
    ngOnInit(): void {
        this.isCreate = false;
        // this.getImage();

    }
    createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
        this.modal.create({
            nzTitle: tplTitle,
            nzContent: tplContent,
            nzFooter: tplFooter,
            nzMaskClosable: false,
            nzClosable: false,
            nzComponentParams: {
                value: 'Template Context'
            },
            nzOnOk: () => console.log('Click ok')
        });
        this.getImage();
    }
    destroyTplModal(modelRef: NzModalRef): void {
        setTimeout(() => {
            modelRef.destroy();
        }, 700);
    }

    private getImage = () => {
        const baseRequest = {
            page: 1,
            pageSize: 20,
            entity: {
                orderId: this.value
            }
        };
        this.postRequest(this.URL + 'SearchDetail', baseRequest)
            .subscribe(
                res => {
                    this.users = res;
                },
                () => console.log('HTTP request complete.')
            );
    }



    public createImgPath = (serverPath: string) => {
        return `https://localhost:44399/${serverPath}`;
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
