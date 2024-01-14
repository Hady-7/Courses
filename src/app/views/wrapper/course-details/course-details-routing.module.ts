import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromComponents from './components';
const routes: Routes = [
  {
    path: '',
    component: fromComponents.CourseDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class courseDetailsRoutingModule {}
