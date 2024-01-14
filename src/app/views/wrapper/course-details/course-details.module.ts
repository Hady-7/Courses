import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { courseDetailsRoutingModule } from './course-details-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import * as fromStore from './store';
import * as fromComponents from './components';
import * as fromServices from './services';
@NgModule({
  declarations: [...fromComponents.COMPONENTS],
  imports: [
    CommonModule,
    courseDetailsRoutingModule,
    MatSnackBarModule,
    FormsModule,
    StoreModule.forFeature('courseFeature', fromStore.reducers),
    EffectsModule.forFeature(fromStore.EFFECTS),
  ],
  providers: [...fromServices.SERVICES],
})
export class courseDetailsModule {}
