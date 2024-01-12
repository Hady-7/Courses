import * as fromModels from '../../models';
import { createAction, props } from '@ngrx/store';


export const loadCourses = createAction('[Course] Load Courses');
export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ payload: fromModels.ICourse[] }>()
);
export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ payload }>()
);
export const addCourseToWishList = createAction('[Course] add course to wish list',
props<{ payload: {courseId: number} }>());
export const addCourseToCart = createAction('[Course] add course to cart',
props<{ payload: {courseId: number} }>());

