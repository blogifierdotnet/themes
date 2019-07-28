import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mySlideImages = [
    "/assets/img/01.jpg",
    "/assets/img/02.jpg",
    "/assets/img/03.jpg",
    "/assets/img/04.jpg",
    "/assets/img/05.jpg",
    "/assets/img/06.jpg"
  ];
  mySlideOptions = { items: 1, dots: true, nav: false };

  constructor() { }

  ngOnInit() {
  }
}