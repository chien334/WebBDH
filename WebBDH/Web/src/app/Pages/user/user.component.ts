import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  public results: any; // Change it private to public
  public mymessage: any;
  mySubscription: any;
  isLoggedIn = false;
  offsetTop = 0;
  offsetBottom = 0;
  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2;
  deadLines = Date.now() + 1000 * 60;
  @ViewChild('valueSearch') name: ElementRef;
  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }
  login(): void {
    this.router.navigateByUrl('/loginuser');
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
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
  onKey(event: any): void {
    this.onselect(event);
  }
  getdata(): void {
    const value = this.name.nativeElement.value;
    this.onselect(value);
  }
}
