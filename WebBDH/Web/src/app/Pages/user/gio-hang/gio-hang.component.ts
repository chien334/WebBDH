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
  userid: any;
  URL = 'https://localhost:44399/api/Home/';
  URLC = 'https://localhost:44399/api/Cart/';
  data:any;
  public cartModel: any;
  totalPrice:any;
  listProduct: any;
  isLoggedIn = false;
  listImg: any;
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private http: HttpClient, private tokenStorageService: TokenStorageService, private router: Router) { }
  async ngAfterViewInit(): Promise<void> {
    this.data = await this.getModel(Number(this.userid));
    this.cartModel=this.data[0];
    this.totalPrice=this.data[1];
    this.listImg = this.cartModel.image === [] ? [{ id: 0, path: null }] : this.cartModel.image;
  }
  async ngOnInit(): Promise<void> {
    this.userid = 1;
    
  }
  async getModel(idpro: number): Promise<any> {
    const baseRequest = {
      page: 1,
      pageSize: 20,
      entity: {
        UserId: idpro
      }
    };
    return await this.postRequest(this.URLC + 'LoadCart', baseRequest).toPromise();
  }
  DeleteItem(item:any): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const idUser = this.tokenStorageService.getUser();
      // const idProducr = this.id;
      const baseRequest1 = {
        entity: item,
      };
      this.postRequest(this.URLC + 'DeleteCartItem', baseRequest1)
        .subscribe(
          res => {
            alert("Xóa sản phẩm thành công");
            window.location.reload();
          },
          () => console.log('HTTP request complete.')
        );

    } else {
      this.router.navigateByUrl('/loginuser');
    }
  }
  addOrder(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const idUser = this.tokenStorageService.getUser();
      // const idProducr = this.id;
      const baseRequest1 = {
        entity: {
          FirstName: "Chien",
          LastName: "Le",
          Phone:"0989898787",
          City:"HCM",
          Province:"Quan 3",
          Content:"khong co",
          cartitems:this.cartModel,
        },
      };
      this.postRequest(this.URLC + 'AddOrder', baseRequest1)
        .subscribe(
          res => {
            alert("Da luu hoa don");
            this.router.navigateByUrl('/home');
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
            return [body.items,body.totalPrice];
          } else {
            throwError(body.message);
            this.router.navigateByUrl('/home');
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

}
