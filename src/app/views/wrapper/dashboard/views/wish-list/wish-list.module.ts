import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import { WishListRoutingModule } from './wish-list-routing.module';

@NgModule({
  declarations: [...fromComponents.COMPONENTS],
  imports: [
    CommonModule,
    WishListRoutingModule,
  ],
  providers: [],
})
export class WishListModule {}
