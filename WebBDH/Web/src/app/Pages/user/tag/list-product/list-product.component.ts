import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.less']
})
export class ListProductComponent implements OnInit {
  tag = '';
  radioValue = '';
  data = [];
  mySubscription: any;
  URL = 'https://localhost:44399/api/Home/LoadProducts';
  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute) { }
  ngOnInit(): void {
    // this.tag = this.router.url;
    const queryparam = this.route.snapshot.paramMap.get('id');
    this.getData(queryparam);
  }
  getData(tag: string): void {
    const baseRequest = {
      page: 1,
      pageSize: 20,
      entity: {}
    };
    const test = tag.indexOf('nhan-hieu');
    if (tag === 'nam') {
      baseRequest.entity = { sex: true };
    } else if (tag === 'nu') {
      baseRequest.entity = { sex: false };
    } else if (tag === 'priceA') {
      baseRequest.entity = {
        fromPrice: 500000,
        toPrice: 1000000
      };
    } else if (tag === 'priceB') {
      baseRequest.entity = {
        fromPrice: 1000001,
        toPrice: 2000000
      };
    } else if (tag === 'priceC') {
      baseRequest.entity = {
        fromPrice: 2000001,
        toPrice: 50000000
      };
    } else if (tag.indexOf('mat-dong-ho') === 0) {
      const item = tag.split('=');
      baseRequest.entity = {
        idMatDH: item[1]
      };
    } else if (tag.indexOf('nhan-hieu') === 0) {
      const item = tag.split('=');
      baseRequest.entity = {
        idBrand: item[1]
      };
    } else if (tag.indexOf('loai-day') === 0) {
      const item = tag.split('=');
      baseRequest.entity = {
        idLoaiDay: item[1]
      };
    } else {
      baseRequest.entity = { name: tag };
    }
    this.postRequest(this.URL, baseRequest)
      .subscribe(
        res => {
          this.data = res;
        },
        () => console.log('HTTP request complete.')
      );
  }
  getDataPrice(): void {
    let baseRequest: any;
    if (this.radioValue === 'A') {
      baseRequest = {
        page: 1,
        pageSize: 20,
        entity: {
          fromPrice: 500000,
          toPrice: 1000000
        }
      };
    } else if (this.radioValue === 'B') {
      baseRequest = {
        page: 1,
        pageSize: 20,
        entity: {
          fromPrice: 1000001,
          toPrice: 2000000
        }
      };
    } else if (this.radioValue === 'C') {
      baseRequest = {
        page: 1,
        pageSize: 20,
        entity: {
          fromPrice: 2000001,
          toPrice: 50000000
        }
      };
    }
    this.postRequest(this.URL, baseRequest)
      .subscribe(
        res => {
          this.data = res;
          this.onselect('fromPrice=' + baseRequest.entity.fromPrice + '&&toPrice=' + baseRequest.entity.toPrice);
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
  onselect(item: string): void {
    this.router.navigate(['/tag/list-product', item]);
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
}
