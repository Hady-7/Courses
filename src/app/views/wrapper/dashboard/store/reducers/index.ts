import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromCoursesReducer from './courses.reducers';

export interface IFeatureState {
  courses: fromCoursesReducer.ICoursesState;
}

export const reducers: ActionReducerMap<IFeatureState> = {
  courses: fromCoursesReducer.reducer,
};

export const getIFeatureState = createFeatureSelector<IFeatureState>(
  'coursesFeature'
);
