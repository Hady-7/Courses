import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, zip } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import * as fromActions from '../../store/actions';
import * as fromStore from '../../store/';
import * as fromModels from '../../models/';
import { map } from 'rxjs/operators';
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

  // Pagination
  currentPage = 1;
  coursesPerPage = 4;
  totalPages: number;

  // Search
  searchTerm = '';

  constructor(private store: Store, private snackBar: MatSnackBar) {}

  ngOnInit() {
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
  }
  onAddToWishList(courseId: number) {
    this.store.dispatch(
      fromActions.addCourseToWishList({ payload: { courseId: courseId } })
    );
  }
  onAddToCart(courseId: number) {
    this.store.dispatch(
      fromActions.addCourseToCart({ payload: { courseId: courseId } })
    );
  }
  showAlreadyAddToWishList() {
    this.snackBar.open('Courses already added in the wishlist', '', {
      duration: 8000,
    });
  }
  showAlreadyAddToCart() {
    this.snackBar.open('Courses already added in the cart', '', {
      duration: 8000,
    });
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

    // Search method
    // onSearch() {
    //   this.currentPage = 1;
    //   this.filterCourses();
    // }

    // private filterCourses() {
    //   this.filteredCourses$ = this.courses$.pipe(
    //     map(courses =>
    //       courses.filter(course =>
    //         course.courseName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    //         course.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    //         course.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()))
    //       )
    //     )
    //   );
    // }
}
