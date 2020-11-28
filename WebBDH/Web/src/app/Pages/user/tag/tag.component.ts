import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.less']
})
export class TagComponent implements OnInit {
  tag = '';
  data: any;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.tag = this.router.url;
    this.getData(this.tag);
  }
  getData(tag: string) {
    if (tag === '/tag/nam') {
      this.data = [
        {
          maCanHo: '100',
          huongNhin: 'dongho 1',
          giacanHo: '200000d',
          image: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg'
        },
        {
          maCanHo: '100',
          huongNhin: 'dongho 1',
          giacanHo: '200000d',
          image: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg'
        },
        {
          maCanHo: '100',
          huongNhin: 'dongho 1',
          giacanHo: '200000d',
          image: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg'
        },
        {
          maCanHo: '100',
          huongNhin: 'dongho 1',
          giacanHo: '200000d',
          image: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg'
        },
        {
          maCanHo: '100',
          huongNhin: 'dongho 1',
          giacanHo: '200000d',
          image: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg'
        },
        {
          maCanHo: '100',
          huongNhin: 'dongho 1',
          giacanHo: '200000d',
          image: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg'
        }
      ];
    } else if (tag === '/tag/nu') {
      this.data = [
        {
          maCanHo: '100',
          huongNhin: 'dongho 1',
          giacanHo: '200000d',
          image: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg'
        },
        {
          maCanHo: '100',
          huongNhin: 'dongho 1',
          giacanHo: '200000d',
          image: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg'
        },
        {
          maCanHo: '100',
          huongNhin: 'dongho 1',
          giacanHo: '200000d',
          image: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg'
        },
        {
          maCanHo: '100',
          huongNhin: 'dongho 1',
          giacanHo: '200000d',
          image: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg'
        },
        {
          maCanHo: '100',
          huongNhin: 'dongho 1',
          giacanHo: '200000d',
          image: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg'
        },
        {
          maCanHo: '100',
          huongNhin: 'dongho 1',
          giacanHo: '200000d',
          image: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg'
        },
        {
          maCanHo: '100',
          huongNhin: 'dongho 1',
          giacanHo: '200000d',
          image: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg'
        },
        {
          maCanHo: '100',
          huongNhin: 'dongho 1',
          giacanHo: '200000d',
          image: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg'
        },
        {
          maCanHo: '100',
          huongNhin: 'dongho 1',
          giacanHo: '200000d',
          image: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg'
        },
        {
          maCanHo: '100',
          huongNhin: 'dongho 1',
          giacanHo: '200000d',
          image: 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg'
        }

      ];
    }
  }

  onSelect() { }
  loadData() { }
}
