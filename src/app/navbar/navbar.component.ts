import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  images = [
    {
      path: '../../assets/images/products/1.png',

    },
    {
      path: '../../assets/images/products/2.png',

    },
    {
      path: '../../assets/images/products/3.png',

    },
    {
      path: '../../assets/images/products/4.png',

    },


  ];
  ngOnInit() {
  }

}
