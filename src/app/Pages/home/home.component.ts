import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any[];
  constructor() { 
    this.items=[];
  }

  ngOnInit(): void {
    this.items = [1,2,3,4,5,6,7,8,9,10];
  }

}
