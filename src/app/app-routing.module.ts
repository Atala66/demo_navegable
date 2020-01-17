import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // default
  { path: '', loadChildren: () => import(`../views/home/home.module`).
  then(m => m.HomeModule)},
  // home
  { path: 'home', loadChildren: () => import(`../views/home/home.module`).
  then(m => m.HomeModule)},
  // test -reusable-form
  { path: 'test-form', loadChildren: () => import(`../views/test-form-view/test-form-view.module`).
  then(m => m.TestFormViewModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
