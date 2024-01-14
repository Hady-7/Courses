import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import * as fromServices from './services';
import * as fromStore from './store';
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.COMPONENTS],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('coursesFeature', fromStore.reducers),
    EffectsModule.forFeature(fromStore.EFFECTS),
  ],
  providers: [...fromServices.SERVICES],
})
export class DashboardModule {}
