import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions';
import * as fromModels from '../../models';

export interface ICartState extends EntityState<fromModels.ICourse> {
  loading: boolean;
}

export const cartAdapter = createEntityAdapter<fromModels.ICourse>();

export const initialState: ICartState = cartAdapter.getInitialState({
  loading: false,
});

export const cartReducer = createReducer(
  initialState,
  on(fromActions.deleteCourseFromCart, (state, { payload }) => {
    return cartAdapter.removeOne(
      payload.courseId, {
        ...state,
      }
    );
  }),
  on(fromActions.addCourseToCart, (state, {payload}) => {
    return cartAdapter.addOne(payload.course, {
      ...state,
    });
  }),
);

export function reducer(
  state: ICartState | undefined,
  action: Action
): ICartState {
  return cartReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } =
  cartAdapter.getSelectors();
