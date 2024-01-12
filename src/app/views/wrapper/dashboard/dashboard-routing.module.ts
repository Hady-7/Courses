import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromComponents from './components';
const routes: Routes = [
  {
    path: '',
    component: fromComponents.DashboardComponent,
    children: [
      {
        path: 'cart',
        loadChildren: () =>
          import('./views/cart/cart.module').then((module) => module.CartModule),
      },
      {
        path: 'wish-list',
        loadChildren: () =>
          import('./views/wish-list/wish-list.module').then((module) => module.WishListModule),
      },
    ]
  },{
    path: ':id',
    component: fromComponents.CourseDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
