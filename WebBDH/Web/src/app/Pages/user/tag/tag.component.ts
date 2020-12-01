import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.less']
})
export class TagComponent implements OnInit {
  tag = '';
  data= [];
  URL = 'https://localhost:44399/api/Home/LoadProducts';
  constructor(private router: Router, private http: HttpClient,private route: ActivatedRoute) { }
  ngOnInit(): void {
    // this.tag = this.router.url;
    const queryparam = this.route.snapshot.paramMap.get('id');
    this.getData(queryparam);
  }
  getData(tag: string) {
    const baseRequest = {
      page: 1,
      pageSize: 20,
      entity: {}
    };
    if (tag === 'nam') {
      baseRequest.entity = { sex: true };
    } else if (tag === 'nu') {
      baseRequest.entity = { sex: false };
    }else {
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
  onSelect() { }
  loadData() { }
}
