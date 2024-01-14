import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions';
import * as fromModels from '../../models';

export interface IWishListState extends EntityState<fromModels.ICourse> {
  loading: boolean
}

export const wishListAdapter = createEntityAdapter<fromModels.ICourse>();

export const initialState: IWishListState = wishListAdapter.getInitialState({
  loading:false ,
});

export const wishListReducer = createReducer(
  initialState,
  on(fromActions.deleteCourseFromWishList, (state, { payload }) => {
    return wishListAdapter.removeOne(payload.courseId, {
      ...state,
    });
  }),
  on(fromActions.addCourseToWishList, (state, {payload}) => {
    return wishListAdapter.addOne(payload.course, {
      ...state,
    });
  }),
);

export function reducer(
  state: IWishListState | undefined,
  action: Action
): IWishListState {
  return wishListReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } =
  wishListAdapter.getSelectors();
