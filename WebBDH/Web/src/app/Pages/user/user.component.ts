import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  public results: any; // Change it private to public
  public mymessage: any;
  isLoggedIn = false;
  offsetTop = 0;
  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2;
  deadLines = Date.now() + 1000 * 60;
  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }
  login() {
    this.router.navigateByUrl('/loginuser');
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
