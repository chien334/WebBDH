import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.less']
})
export class GioHangComponent implements OnInit, AfterViewInit {
  id: any;
  URL = 'https://localhost:44399/api/Home/';
  URLC = 'https://localhost:44399/api/Cart/';
  productModel: any;
  listProduct: any;
  isLoggedIn = false;
  listImg: any;
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private http: HttpClient, private tokenStorageService: TokenStorageService, private router: Router) { }
  ngAfterViewInit(): void {
  }
  async ngOnInit(): Promise<void> {
    const queryparam = this.route.snapshot.paramMap.get('id');
    this.id = queryparam.split('-')[1];
    this.productModel = await this.getModel(Number(this.id));
    this.listProduct = await this.getListLienQuang();
    this.listImg = this.productModel.image === [] ? [{ id: 0, path: null }] : this.productModel.image;
  }
  async getModel(idpro: number): Promise<any> {
    const baseRequest = {
      page: 1,
      pageSize: 20,
      entity: {
        id: idpro
      }
    };
    return await this.postRequest(this.URL + 'SearchModel', baseRequest).toPromise();
  }
  async getListLienQuang(): Promise<any> {
    const baseRequest = {
      page: 1,
      pageSize: 4,
      entity: {
      }
    };
    return await this.postRequest(this.URL + 'LoadProducts', baseRequest).toPromise();
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
  public createImgPath = (serverPath: string) => {
    if (serverPath === '' || serverPath === null) {
      return '/assets/screen-3.jpg';
    }
    return `https://localhost:44399/${serverPath}`;
  }
  addProductTocard(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const idUser = this.tokenStorageService.getUser();
      // const idProducr = this.id;
      const baseRequest1 = {
        entity: {
          productId: Number(this.id),
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

}
