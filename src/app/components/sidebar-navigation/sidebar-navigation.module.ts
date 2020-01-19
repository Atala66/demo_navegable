import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SidebarNavigationComponent } from './sidebar-navigation.component';

const routes: Routes = [
  {path: '', component: SidebarNavigationComponent }
];

@NgModule({
  declarations: [SidebarNavigationComponent],
  imports: [
    CommonModule,
 //   RouterModule.forChild(routes)
  ],
  exports: [
    SidebarNavigationComponent
  ]
})
export class SidebarNavigationModule { }
