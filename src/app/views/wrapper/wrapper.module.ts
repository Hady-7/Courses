import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperRoutingModule } from './wrapper-routing.module';
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.COMPONENTS],
  imports: [
    CommonModule,
    WrapperRoutingModule,
  ],
  providers: [],
})
export class WrapperModule {}
