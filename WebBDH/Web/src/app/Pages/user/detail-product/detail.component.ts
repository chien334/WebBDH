import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  id: any;
  URL = 'https://localhost:44399/api/Home/';
  productModel: any;
  listProduct: any;
  isLoggedIn = false;
  listImg = [
    { data: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg' },
    { data: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg' },
    { data: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg' }
  ];
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private http: HttpClient, private tokenStorageService: TokenStorageService, private router: Router) { }
  ngOnInit(): void {
    const queryparam = this.route.snapshot.paramMap.get('id');
    this.id = queryparam.split('-')[1];
    this.getModel(Number(this.id));
    this.getListLienQuang();

  }
  getModel(idpro: number): void {
    const baseRequest = {
      page: 1,
      pageSize: 20,
      entity: {
        id: idpro
      }
    };
    this.postRequest(this.URL + 'SearchModel', baseRequest)
      .subscribe(
        res => {
          this.productModel = res;
          console.log(this.productModel);
        },
        () => console.log('HTTP request complete.')
      );
  }
  getListLienQuang(): void {
    const baseRequest = {
      page: 1,
      pageSize: 4,
      entity: {
      }
    };
    this.postRequest(this.URL + 'LoadProducts', baseRequest)
      .subscribe(
        res => {
          this.listProduct = res;
          console.log(this.listProduct);
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
  public createImgPath = (serverPath: string) => {
    if (serverPath === '' || serverPath === null) {
      return './assets/screen-3.jpg';
    }
    return `https://localhost:44399/${serverPath}`;
  }
  addProductTocard(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const idUser = this.tokenStorageService.getUser().id;
      const idProducr = this.id;
      const baseRequest1 = {
        page: 1,
        pageSize: 20,
        entity: {
          // id user + idProduct đã lấy
        }
      };
      this.postRequest(this.URL + 'them cái duong dan', baseRequest1)
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
