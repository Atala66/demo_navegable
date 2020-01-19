import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public isOpenCombo = false;

  constructor(
    // tslint:disable-next-line:variable-name
    private _routerSrv: Router
  ) { }

  ngOnInit() {}

   public toggleCombo(combo: string) {
    if (combo) {
      this.isOpenCombo = !this.isOpenCombo;
    }
    console.log(this.isOpenCombo);
   }


  public goToRoute(route: any) {
    this._routerSrv.navigate([route]);
  }

}
