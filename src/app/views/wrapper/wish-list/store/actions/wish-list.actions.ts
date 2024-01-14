import * as fromModels from '../../models';
import { createAction, props } from '@ngrx/store';

export const deleteCourseFromWishList = createAction(
  '[wishList] delete course from wish list',
  props<{ payload: {courseId: number} }>()
);
export const addCourseToWishList = createAction(
  '[wishList] add course to wish list',
  props<{ payload: {course: fromModels.ICourse} }>()
);
