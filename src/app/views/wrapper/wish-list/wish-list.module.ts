import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import { WishListRoutingModule } from './wish-list-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store';

@NgModule({
  declarations: [...fromComponents.COMPONENTS],
  imports: [
    CommonModule,
    WishListRoutingModule,
    StoreModule.forFeature('wishListFeature', fromStore.reducers),
  ],
  providers: [],
})
export class WishListModule {}
