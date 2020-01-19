import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public isOpenDropdown = false;

  constructor(
    // tslint:disable-next-line:variable-name
    private _routerSrv: Router
  ) { }

  ngOnInit() {}

   public toggleDropdown() {
    this.isOpenDropdown = !this.isOpenDropdown;
    console.log(this.isOpenDropdown);
   }


  public goToRoute(route: any) {
    this._routerSrv.navigate([route]);
  }

}
