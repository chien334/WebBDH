import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent {
  public results: any; // Change it private to public
 public mymessage: any;
 offsetTop = 0;
 deadline =Date.now() + 1000 * 60 * 60 * 24 * 2 ;
 deadLines=Date.now()+1000*60;

}
