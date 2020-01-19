import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './views/home/home.module';
import { LoginModule } from './views/login/login.module';
import { HeaderModule } from './components/header/header.module';
import { TestFormViewModule } from './views/test-form-view/test-form-view.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    LoginModule,
    TestFormViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
