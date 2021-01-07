import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-list-shop-cart',
    template: `
    <table id="cart" class="table table-hover table-condensed">
    <thead>
      <tr>
        <th style="width:50%">Tên sản phẩm</th>
        <th style="width:10%">Giá</th>
        <th style="width:8%">Số lượng</th>
        <th style="width:22%" class="text-center">Thành tiền</th>
        <th style="width:10%"> </th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let item of cartModel">
        <td data-th="Product">
          <div class="row">
            <div class="col-sm-2 hidden-xs"><img
                src="http://hocwebgiare.com/thiet_ke_web_chuan_demo/shopping_cart/images/090.jpg" alt="Sản phẩm 1"
                class="img-responsive" width="100">
            </div>
            <div class="col-sm-10">
              <h4 class="nomargin">{{item.product.name}}</h4>
              <p>{{item.product.description}}</p>
            </div>
          </div>
        </td>
        <td data-th="Price">{{item.product.price}}</td>
        <td data-th="Quantity"><input class="form-control text-center" value="{{item.quantity}}" type="number">
        </td>
        <td data-th="Subtotal" class="text-center">{{item.price}}</td>
        <td class="actions" data-th="">
          <button class="btn btn-danger btn-sm">Xóa<i class="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td><a href="/" class="btn btn-warning"><i class="fa fa-angle-left"></i> Tiếp tục mua
            hàng</a>
        </td>
        <td colspan="2" class="hidden-xs"> </td>
        <td class="hidden-xs text-center"><strong>Tổng tiền {{totalPrice}} đ</strong>
        </td>
        <td><a href="http://hocwebgiare.com/" class="btn btn-success btn-block">Thanh toán <i
              class="fa fa-angle-right"></i></a>
        </td>
      </tr>
    </tfoot>
  </table>
    `,
    styles: [``]
})
export class ListShopCartComponent {
     @Input() cartModel: any; 
     @Input() totalPrice:any;
}
