import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatSnackBar,MatSnackBarConfig ,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as fromActions from '../../store/actions';
import * as fromStore from '../../store/';
import * as fromModels from '../../models/';
import * as fromWishListActions from '../../../wish-list/store/actions';
import * as fromCartActions from '../../../cart/store/actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  courses$: Observable<fromModels.ICourse[]>;
  filteredCourses$: Observable<fromModels.ICourse[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  courses: fromModels.ICourse[];
  sortedCourses$: Observable<fromModels.ICourse[]>;
  // Pagination
  currentPage = 1;
  coursesPerPage = 4;
  totalPages: number;

  // Search
  searchForm: FormGroup;
  // sort
  selectedSortOption: string = 'default';
  constructor(private store: Store, private snackBar: MatSnackBar,private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchTerm: [''], // Initialize with an empty string
    });
    this.searchForm.get('searchTerm').valueChanges.subscribe((searchTerm) => {
      this.store.dispatch(fromActions.searchCourses({ searchTerm }));
    });
    this.store.dispatch(fromActions.loadCourses());
    this.courses$ = this.store.pipe(select(fromStore.getCoursesSelectAll));
    this.store
      .pipe(select(fromStore.getCoursesSelectAll))
      .subscribe((courses) => {
        this.courses = courses;
        this.totalPages = Math.ceil(courses.length / this.coursesPerPage);
        // this.filterCourses();
        console.log(courses);
      });
    this.loading$ = this.store.pipe(select(fromStore.getCoursesLoading));
    this.error$ = this.store.pipe(select(fromStore.getCoursesError));
    this.sortedCourses$ = this.store.pipe(select(fromStore.getSortedCourses));
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


  // Pagination methods
  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  onPrevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.coursesPerPage;
  }

  get endIndex(): number {
    return this.startIndex + this.coursesPerPage;
  }

  // sort
   sortCourses(sortBy: string) {
    this.store.dispatch(fromActions.sortCourses({ sortBy }));
  }

}
