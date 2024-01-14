import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromAppReducer from './app.reducers';

export interface IRootState {
  app: fromAppReducer.IAppState;
}

export const reducers = {
  app: fromAppReducer.reducer,
};

export const getAppState = createFeatureSelector<fromAppReducer.IAppState>(
  'app'
);
