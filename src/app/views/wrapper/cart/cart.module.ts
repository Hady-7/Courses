import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { CartRoutingModule } from './cart-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import * as fromStore from './store';
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.COMPONENTS],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatSnackBarModule,
    FormsModule,
    StoreModule.forFeature('cartFeature', fromStore.reducers),
  ],
  providers: [],
})
export class CartModule {}
