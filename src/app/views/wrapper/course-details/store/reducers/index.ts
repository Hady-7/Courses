import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromCourseReducer from './course.reducers';

export interface IFeatureState {
  course: fromCourseReducer.ICourseState;
}

export const reducers: ActionReducerMap<IFeatureState> = {
  course: fromCourseReducer.reducer,
};

export const getIFeatureState = createFeatureSelector<IFeatureState>(
  'courseFeature'
);
