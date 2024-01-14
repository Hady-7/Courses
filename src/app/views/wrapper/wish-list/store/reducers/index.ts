import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromWishListReducer from './wish-list.reducers';

export interface IFeatureState {
  wishList: fromWishListReducer.IWishListState;
}

export const reducers: ActionReducerMap<IFeatureState> = {
  wishList: fromWishListReducer.reducer,
};

export const getIFeatureState = createFeatureSelector<IFeatureState>(
  'wishListFeature'
);
