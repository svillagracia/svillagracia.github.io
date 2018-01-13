import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  public editors = true;
  public openRoot = true;
  public projects = false;

  constructor() { }

  ngOnInit() {
  }

}
