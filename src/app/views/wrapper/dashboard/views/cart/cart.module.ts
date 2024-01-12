import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CartRoutingModule } from './cart-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// import * as fromServices from './services';
// import * as fromStore from './store';
import * as fromComponents from './components';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [...fromComponents.COMPONENTS, CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatSnackBarModule,
    FormsModule,
    // StoreModule.forFeature('coursesFeature', fromStore.reducers),
    // EffectsModule.forFeature(fromStore.EFFECTS),
  ],
  providers: [
    // ...fromServices.SERVICES
  ],
})
export class CartModule {}
