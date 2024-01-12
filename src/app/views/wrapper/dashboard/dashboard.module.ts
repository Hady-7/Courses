import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import * as fromServices from './services';
import * as fromStore from './store';
import * as fromComponents from './components';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

@NgModule({
  declarations: [...fromComponents.COMPONENTS, CourseDetailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSnackBarModule,
    FormsModule,
    StoreModule.forFeature('coursesFeature', fromStore.reducers),
    EffectsModule.forFeature(fromStore.EFFECTS),
  ],
  providers: [...fromServices.SERVICES],
})
export class DashboardModule {}
