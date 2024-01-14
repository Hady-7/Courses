import * as fromModels from '../../models';
import { createAction, props } from '@ngrx/store';

export const deleteCourseFromCart = createAction(
  '[Cart] delete course from cart',
  props<{ payload: {courseId: number} }>()
);
export const addCourseToCart = createAction(
  '[Cart] add course to cart',
  props<{ payload: {course: fromModels.ICourse} }>()
);
