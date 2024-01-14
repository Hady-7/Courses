import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatSnackBar,MatSnackBarConfig ,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import * as fromActions from '../../store/actions';
import * as fromStore from '../../store/';
import * as fromModels from '../../models/';
import * as fromWishListActions from '../../../wish-list/store/actions';
import * as fromCartActions from '../../../cart/store/actions';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  course$: Observable<fromModels.ICourse[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  id: number;
  constructor(private store: Store, private snackBar: MatSnackBar, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.store.dispatch(
      fromActions.loadCourse({ payload: { courseId: this.id } })
    );
    this. course$ = this.store
      .pipe(select(fromStore.getCourseSelectAll))
      ;
  }
  onAddToWishList(courseId: number, course: fromModels.ICourse) {
    this.store.dispatch(
      fromActions.addCourseToWishList({ payload: { courseId: courseId } })
    );
    this.store.dispatch(
      fromWishListActions.addCourseToWishList({ payload: { course: course } })
    );
  }
  onAddToCart(courseId: number, course: fromModels.ICourse) {
    this.store.dispatch(
      fromActions.addCourseToCart({ payload: { courseId: courseId } })
    );
    this.store.dispatch(
      fromCartActions.addCourseToCart({ payload: { course: course } })
    );
  }
  showAlreadyAddToWishList() {
    const config: MatSnackBarConfig = {
      duration: 5000,
      verticalPosition: 'top' as MatSnackBarVerticalPosition,
      panelClass: ['custom-snackbar']
    };
    this.snackBar.open('Courses already added in the wishlist', '', config);
  }
  showAlreadyAddToCart() {
    const config: MatSnackBarConfig = {
      duration: 5000,
      verticalPosition: 'top' as MatSnackBarVerticalPosition,
      panelClass: ['custom-snackbar']
    };
    this.snackBar.open('Courses already added in the cart', '', config);
  }
}
