import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    loadChildren: () =>
      import('./views/wrapper/wrapper.module').then(
        (module) => module.WrapperModule
      ),
  },
    {
    path: '**',
    loadChildren: () =>
      import('./views/not-found/not-found.module').then(
        (module) => module.NotFoundModule
      ),
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('./views/dashboard/dashboard.module').then(
  //       (module) => module.DashboardModule
  //     ),
  // },
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
