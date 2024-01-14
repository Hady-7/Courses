import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromCartReducer from '../reducers/cart.reducers';

export const getCartState = createSelector(
  fromFeature.getIFeatureState,
  (state: fromFeature.IFeatureState) => state.cart
);

export const getCartSelectAll = createSelector(
  getCartState,
  fromCartReducer.selectAll
);
