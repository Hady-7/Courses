import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromActions from '../../store/actions';
import * as fromStore from '../../store/';
import * as fromModels from '../../models/';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  courses$: Observable<fromModels.ICourse[]>;

  constructor(private store: Store) {}

  ngOnInit() {

    this.courses$ = this.store.pipe(select(fromStore.getWishListSelectAll));
    this.store.pipe(select(fromStore.getWishListSelectAll)).subscribe((data) => {
      console.log(data);
    })
  }
  onRemoveFromWIshList(courseId: number) {
    this.store.dispatch(
      fromActions.deleteCourseFromWishList({ payload: { courseId: courseId } })
    );

  }


}

