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
      <span>Mã SP: {{value}}</span>
    </button>
    <ng-template #tplTitle>
      <span>Title Template</span>
    </ng-template>
    <ng-template #tplContent let-params>
    <article class="container container-fluid">
        <section class="create" *ngIf="isCreate">
            <h1>Create Image</h1>
            <form>
            <div class="form-group">
                <label for="name">Stt</label>
                <input type="number" class="form-control" id="stt" name="stt" [(ngModel)]="stt">
            </div>
            <app-upload (onUploadFinished)="uploadFinished($event)"></app-upload>
            <div class="row">
                <div class="offset-md-5 col-md-2">
                <button type="button" class="btn btn-primary" (click)="onCreate()">Create </button>
                </div>
            </div>
            </form>
        </section>

        <section class="users" *ngIf="!isCreate">
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col">Stt</th>
                <th scope="col">idProduct</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let user of users">
                    <td><img [src]="createImgPath(user.path)" alt="profile picture" style="width:60px; height:60px;"></td>
                    <td>{{user.stt}}</td>
                    <td>{{user.idProduct}}</td>
                    <td><button nz-button nzType="primary" (click)='delectImage(user)'>Delete</button></td>
                </tr>
            </tbody>
            </table>
            <div class="row">
            <div class="offset-md-10 col-md-2">
                <button type="button" class="btn btn-primary" (click)="returnToCreate()">New Image</button>
            </div>
            </div>
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
export class ImageDialogComponent extends DefaultEditor implements OnInit, ViewCell {
    @Input() value: any;
    @Input() rowData: any;
    public isCreate = false;
    public stt: number;
    public idProduct: number;
    public user: ImageToCreate;
    public users: ImageModel[] = [];
    public response: { dbPath: '' };
    URL = 'https://localhost:44399/admin/api/image/';
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
    public onCreate = () => {
        this.user = {
            stt: this.stt,
            idProduct: this.value,
            path: this.response.dbPath
        };
        const baseRequest = {
            entity: this.user
        };
        this.postRequest(this.URL + 'create', baseRequest)
            .subscribe(
                res => {
                    this.getImage();
                    this.isCreate = false;
                },
                () => console.log('HTTP request complete.')
            );
    }
    delectImage(user: any): void {
        const baseRequest = {
            entity: user
        };
        this.postRequest(this.URL + 'delete', baseRequest)
            .subscribe(
                res => {
                    this.getImage();
                },
                () => console.log('HTTP request complete.')
            );
    }

    private getImage = () => {
        const baseRequest = {
            page: 1,
            pageSize: 20,
            entity: {
                idProduct: this.value
            }
        };
        this.postRequest(this.URL + 'search', baseRequest)
            .subscribe(
                res => {
                    this.users = res;
                },
                () => console.log('HTTP request complete.')
            );
    }

    public returnToCreate = () => {
        this.isCreate = true;
        this.stt = 0;
        this.idProduct = 0;
    }

    public uploadFinished = (event) => {
        this.response = event;
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
