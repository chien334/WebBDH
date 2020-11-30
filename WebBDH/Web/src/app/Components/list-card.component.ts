import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-list-card',
  template: `
  <div class="row">
        <nz-list style="width:95%;padding-left:3%" [nzDataSource]="data" [nzRenderItem]="item"
          [nzPagination]="pagination" [nzGrid]="{ gutter: 10 ,xs: 24, sm: 12, md: 8, lg: 6, xl: 6 }">
          <ng-template #item let-item>
            <nz-list-item [nzContent]="nzContent">
              <ng-template #nzContent>
                <a (click)="onSelect(item)">
                  <div>
                    <div class="card h-90">
                      <a routerLink="/chi-tiet-san-pham"><img class="card-img-top"
                      [src]="createImgPath(item.path)" alt=""></a>
                      <div class="card-body" style="text-align: center">
                        <h4 class="card-title">
                          <a (click)="onSelect(item)">{{item.name}}</a>
                        </h4>
                        <h5>{{item.price}}VND</h5>
                        <h5 class="card-text">{{item.brand}}</h5>
                        <button nz-button (click)="addProductTocard($event)">Thêm vào giỏ hành</button>
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
  total: 20;
  mySubscription: any;
  constructor(private router: Router) { }
  onSelect(item: any): void {
    this.router.navigate(['/detail', item.name + '-' + item.id]);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44399/${serverPath}`;
  }
  loadData(event: any): void { }
  addProductTocard(): void { }
}
