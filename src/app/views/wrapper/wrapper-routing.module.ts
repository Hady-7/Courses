import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromComponents from './components';
const routes: Routes = [
  {
    path: '',
    component: fromComponents.WrapperComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./cart/cart.module').then((module) => module.CartModule),
      },
      {
        path: 'wish-list',
        loadChildren: () =>
          import('./wish-list/wish-list.module').then((module) => module.WishListModule),
      },
      {
        path: 'course/:id',
        loadChildren: () =>
          import('./course-details/course-details.module').then((module) => module.courseDetailsModule),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrapperRoutingModule {}
