// import { createEntityAdapter, EntityState } from '@ngrx/entity';
// import { Action, createReducer, on } from '@ngrx/store';
// import * as fromActions from '../actions';
// import * as fromModels from '../../models';

// export interface ICartState extends EntityState<fromModels.ICourse> {
//   error: undefined;
//   loading: boolean;
// }

// export const cartAdapter = createEntityAdapter<fromModels.ICourse>();

// export const initialState: ICartState = cartAdapter.getInitialState({
//   loading: false,
//   error: undefined,
// });

// export const cartReducer = createReducer(
//   initialState,
//   on(fromActions.loadCart, (state) => {
//     return cartAdapter.addOne([], {
//       ...state,
//       loading: true,
//       error: undefined,
//     });
//   }),
//   on(fromActions.loadCartSuccess, (state, { payload }) =>
//   cartAdapter.addOne(payload, {
//       ...state,
//       loading: false,
//     })
//   ),
//   on(fromActions.loadCartFailure, (state, { payload }) => ({
//     ...state,
//     loading: false,
//     error: payload,
//   })),
// );

// export function reducer(
//   state: ICartState | undefined,
//   action: Action
// ): ICartState {
//   return cartReducer(state, action);
// }

// export const { selectIds, selectEntities, selectAll, selectTotal } =
//   cartAdapter.getSelectors();

// export const getCoursesLoading = (state: ICartState) => state.loading;
// export const getCoursesError = (state: ICartState) => state.error;

