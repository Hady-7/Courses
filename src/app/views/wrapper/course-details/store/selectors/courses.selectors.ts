import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromCourseReducer from '../reducers/course.reducers';

export const getCourseState = createSelector(
  fromFeature.getIFeatureState,
  (state: fromFeature.IFeatureState) => state.course
);

export const getCourseSelectAll = createSelector(
  getCourseState,
  fromCourseReducer.selectAll
);
export const getCourseSelectEntities = createSelector(
  getCourseState,
  fromCourseReducer.selectEntities
);

export const getCourseLoading = createSelector(
  getCourseState,
  fromCourseReducer.getCourseLoading
);

export const getCourseError = createSelector(
  getCourseState,
  fromCourseReducer.getCourseError
);
