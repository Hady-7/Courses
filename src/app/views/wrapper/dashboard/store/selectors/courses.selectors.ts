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

export const getCoursesLoading = createSelector(
  getCoursesState,
  fromCoursesReducer.getCoursesLoading
);

export const getCoursesError = createSelector(
  getCoursesState,
  fromCoursesReducer.getCoursesError
);

export const getSortBy = createSelector(
  getCoursesState,
  (state) => state.sortBy
);

export const getSortedCourses = createSelector(
  getCoursesSelectAll,
  getSortBy,
  (courses, sortBy) => {
    switch (sortBy) {
      case 'priceLowToHigh':
        return [...courses].sort((a, b) => a.actualPrice - b.actualPrice);
      case 'priceHighToLow':
        return [...courses].sort((a, b) => b.actualPrice - a.actualPrice);
      case 'nameAtoZ':
        return [...courses].sort((a, b) => a.courseName.localeCompare(b.courseName));
      case 'nameZtoA':
        return [...courses].sort((a, b) => b.courseName.localeCompare(a.courseName));
      default:
        return courses;
    }
  }
);
