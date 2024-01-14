import * as fromModels from '../../models';
import { createAction, props } from '@ngrx/store';


export const loadCourse = createAction('[Course] Load Course',
props<{ payload: { courseId: number } }>())
export const loadCourseSuccess = createAction(
  '[Course] Load Course Success',
  props<{ payload: fromModels.ICourse }>()
);
export const loadCourseFailure = createAction(
  '[Course] Load Course Failure',
  props<{ payload : Error }>()
);

export const addCourseToWishList = createAction('[Course] add course to wish list',
props<{ payload: {courseId: number} }>());
export const addCourseToCart = createAction('[Course] add course to cart',
props<{ payload: {courseId: number} }>());

