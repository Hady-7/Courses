import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromCoursesReducer from '../reducers/courses.reducers';

export const getCoursesState = createSelector(
  fromFeature.getIFeatureState,
  (state: fromFeature.IFeatureState) => state.courses
);

export const getCoursesSelectAll = createSelector(
  getCoursesState,
  fromCoursesReducer.selectAll
);
export const getCoursesSelectEntities = createSelector(
  getCoursesState,
  fromCoursesReducer.selectEntities
);

export const getCoursesLoading = createSelector(
  getCoursesState,
  fromCoursesReducer.getCoursesLoading
);

export const getCoursesError = createSelector(
  getCoursesState,
  fromCoursesReducer.getCoursesError
);
