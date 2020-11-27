
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit{
    isCollapsed = false;
    isLoggedIn = false;
    constructor(private tokenStorageService: TokenStorageService , private router: Router) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
    }else{
      this.router.navigateByUrl('/loginadmin');
    }
  }
    logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
