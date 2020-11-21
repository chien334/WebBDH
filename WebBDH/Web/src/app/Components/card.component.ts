
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  template: `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" *ngFor="let ind of listImg ; index as i" data-slide-to="(i)" [ngClass]="{'active': i==0}"></li>
  </ol>
  <div class="carousel-inner" role="listbox">
    <div  >
      <div class="carousel-item" *ngFor="let item of listImg;index as i" [style.background-image]="'url('+ item.data+')'" [ngClass]="{'active': i==0}">
        <div class="carousel-caption d-none d-md-block" >
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>`,
  styles: [`.carousel-item {
    height: 93vh;
    min-height: 300px;
    background: no-repeat center center scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .portfolio-item {
    margin-bottom: 30px;
  }`]
})
export class CardComponent {
  isCollapsed = false;
  @Input() listImg = [];
}
