import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as fromServices from '../../services/course.service';
import * as fromActions from '../actions';

@Injectable()
export class CourseEffects {
  constructor(
    private actions$: Actions,
    private courseService: fromServices.CourseService
  ) {}
  loadCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadCourse),
      switchMap(({ payload }) =>
        this.courseService.getOneCourse(payload.courseId).pipe(
          tap(console.log),
          map((data) => fromActions.loadCourseSuccess({ payload: data })),
          catchError((error) =>
            of(fromActions.loadCourseFailure({ payload: error }))
          )
        )
      )
    )
  );
}
