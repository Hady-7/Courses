import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromActions from '../../store/actions';
import * as fromStore from '../../store/';
import * as fromModels from '../../models/';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  courses$: Observable<fromModels.ICourse[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.courses$ = this.store.pipe(select(fromStore.getCartSelectAll));
    this.store.pipe(select(fromStore.getCartSelectAll)).subscribe((data) => {
      console.log(data);
    })
  }
  onRemoveFromCart(courseId: number) {
    this.store.dispatch(
      fromActions.deleteCourseFromCart({ payload: { courseId: courseId } })
    );

  }
}
