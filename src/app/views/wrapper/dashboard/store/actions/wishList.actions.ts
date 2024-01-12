import * as fromModels from '../../models';
import { createAction, props } from '@ngrx/store';


export const addCourseToWishList = createAction('[Course] add course to wish list',
props<{ payload: {courseId: number} }>());

