import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent  implements AfterViewInit {
  listImg = [
    { data: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg' },
    { data: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg' },
    { data: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg' }
  ];
  URL = 'https://localhost:44399/api/Home/LoadProducts';
  data = [ ];
  constructor(private http: HttpClient){}
  ngAfterViewInit(): void {
    const baseRequest = {
      page: 1,
      pageSize: 20,
      entity: {}
    };
    this.postRequest(this.URL, baseRequest)
    .subscribe(
      res => {
        this.data = res;
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
