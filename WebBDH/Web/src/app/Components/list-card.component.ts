import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStorageService } from '../_services/token-storage.service';

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
                      <a ><img class="card-img-top"
                      [src]="createImgPath(item.path)" style="height:40vh; " alt=""></a>
                      <div class="card-body" style="text-align: center">
                        <h4 class="card-title">
                          <a (click)="onSelect(item)">{{item.name}}</a>
                        </h4>
                        <h5>{{item.price}}VND</h5>
                        <h5 class="card-text">{{item.brand}}</h5>
                        <button nz-button (click)="addProductTocard(item)">Thêm vào giỏ hành</button>
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
  URL = 'https://localhost:44399/api/';
  URLC = 'https://localhost:44399/api/Cart/';
  total: 30;
  mySubscription: any;
  isLoggedIn = false;
  constructor(private router: Router, private tokenStorageService: TokenStorageService, private http: HttpClient) { }
  onSelect(item: any): void {
    this.router.navigate(['/detail', item.name + '-' + item.id]);
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
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
    if (serverPath === '' || serverPath === null) {
      return './assets/screen-3.jpg';
    }
    return `https://localhost:44399/${serverPath}`;
  }
  loadData(event: any): void { }
  addProductTocard(item: any): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const idUser = this.tokenStorageService.getUser();
      const baseRequest1 = {
        entity: {
          productId: Number(item.id),
          cartId: idUser.items.id,
          sku: "",
          price: 0,
          discount: 0,
          quantity: 0,
          content: '',
        },
      };
      this.postRequest(this.URLC + 'AddCartItem', baseRequest1)
        .subscribe(
          res => {
            // dứ liệu lấy ra là gì
          },
          () => console.log('HTTP request complete.')
        );

    } else {
      this.router.navigateByUrl('/loginuser');
    }
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
