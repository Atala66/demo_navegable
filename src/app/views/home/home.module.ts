import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { HeaderComponent } from 'src/app/components/header/header.component';

const routes: Routes = [
  {path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
