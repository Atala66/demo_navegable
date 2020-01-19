import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
public title = 'Anjana Test';
public LOGIN_ROUTE = 'login';
public DEFAULT_ROUTE = '/';
public showHeader: boolean = false;

constructor(
  private router: Router
  ) {

   this.router.events.forEach((event) => {
    if (event instanceof NavigationStart) {
      if (event.url === this.LOGIN_ROUTE || event.url === this.DEFAULT_ROUTE ) {
        this.showHeader = false;
        console.log(this.showHeader);
      } else {
        this.showHeader = true;
        console.log(this.showHeader);
      }
    }
   });
}

ngOnInit() {  }

}
