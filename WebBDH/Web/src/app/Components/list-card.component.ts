import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-list-card',
    template: `
  <div class="row">
        <nz-list style="width:95%;padding-left:3%" [nzDataSource]="data" [nzRenderItem]="item"
          [nzPagination]="pagination" [nzGrid]="{ gutter: 16 ,xs: 24, sm: 12, md: 12, lg: 12, xl: 8 }">
          <ng-template #item let-item>
            <nz-list-item [nzContent]="nzContent">
              <ng-template #nzContent>
                <a (click)="onSelect(item)">
                  <div>
                    <div class="card h-90">
                      <a routerLink="/chi-tiet-san-pham"><img class="card-img-top"
                          src="data:image/jpeg;base64,{{item.image}}" alt=""></a>
                      <div class="card-body">
                        <h4 class="card-title">
                          <a (click)="onSelect(item)">Mã căn: {{item.maCanHo}}</a>
                        </h4>
                        <h5>Giá: {{item.giacanHo}}</h5>
                        <p class="card-text">Hướng nhà : {{item.huongNhin}}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </ng-template>
            </nz-list-item>
          </ng-template>
          <ng-template #pagination>
            <nz-pagination [nzPageIndex]="1" [nzTotal]="total" (nzPageIndexChange)="loadData($event)"></nz-pagination>
          </ng-template>
        </nz-list>
        <!-- /.col-lg-9 -->
      </div>
`,
    styles: [``]
})
export class ListCardComponent {
    @Input() data: any;
    total: any;
    onSelect(event: any) { }
    loadData(event: any) { }
}