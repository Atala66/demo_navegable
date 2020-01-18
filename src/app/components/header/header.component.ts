import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public isOpenDropdown: boolean;

  constructor(
    // tslint:disable-next-line:variable-name
    private _routerSrv: Router
  ) { }

  ngOnInit() {
    this.isOpenDropdown = false;
   }



  public goToRoute(route: any) {
    this._routerSrv.navigate([route]);
  }

}
