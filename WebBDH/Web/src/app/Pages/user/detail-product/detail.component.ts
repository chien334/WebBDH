import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  id: any;
  URL = 'https://localhost:44399/api/Home/SearchModel';
  productModel: any;
  listImg = [
    { data: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg' },
    { data: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg' },
    { data: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg' }
  ];
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit(): void {
    const queryparam = this.route.snapshot.paramMap.get('id');
    this.id = queryparam.split('-')[1];
    this.getModel(Number(this.id));
    console.log(this.productModel);
  }
  getModel(idpro: number): void {
    const baseRequest = {
      page: 1,
      pageSize: 20,
      entity: {
        id: idpro
      }
    };
    this.postRequest(this.URL, baseRequest)
    .subscribe(
      res => {
        this.productModel = res;
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
