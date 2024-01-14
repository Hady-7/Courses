import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromWishListReducer from '../reducers/wish-list.reducers';

export const getWishListState = createSelector(
  fromFeature.getIFeatureState,
  (state: fromFeature.IFeatureState) => state.wishList
);

export const getWishListSelectAll = createSelector(
  getWishListState,
  fromWishListReducer.selectAll
);
