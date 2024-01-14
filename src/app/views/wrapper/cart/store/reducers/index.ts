import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromCartReucer from './cart.reducers';

export interface IFeatureState {
  cart: fromCartReucer.ICartState;
}

export const reducers: ActionReducerMap<IFeatureState> = {
  cart: fromCartReucer.reducer,
};

export const getIFeatureState = createFeatureSelector<IFeatureState>(
  'cartFeature'
);
