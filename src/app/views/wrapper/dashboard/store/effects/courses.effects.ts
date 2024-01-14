
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap ,tap } from 'rxjs/operators';
import * as fromServices from '../../services';
import * as fromActions from '../actions';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private courseService: fromServices.CoursesService
  ) {}
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadCourses),
      switchMap(() =>
        this.courseService.getAllCourses().pipe(
          tap(console.log),
          map((data) => fromActions.loadCoursesSuccess({ payload: data })),
          catchError((error) =>
            of(fromActions.loadCoursesFailure({ payload: error }))
          )
        )
      )
    )

  );
  searchCourses$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromActions.searchCourses),
    switchMap(({ searchTerm }) =>
      this.courseService.searchCourses(searchTerm).pipe(
        map((data) => fromActions.searchCoursesSuccess({ payload: data })),
        catchError((error) =>
          of(fromActions.searchCoursesFailure({ payload: error }))
        )
      )
    )
  )
);
 sortCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.sortCourses),
      switchMap(({ sortBy }) =>
        this.courseService.sortCourses(sortBy).pipe(
          map((data) => fromActions.loadCoursesSuccess({ payload: data })),
          catchError((error) =>
            of(fromActions.loadCoursesFailure({ payload: error }))
          )
        )
      )
    )
  );
}
