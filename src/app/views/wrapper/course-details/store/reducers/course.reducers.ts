import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions';
import * as fromModels from '../../models';

export interface ICourseState extends EntityState<fromModels.ICourse> {
  error: Error;
  loading: boolean;
}

export const courseAdapter = createEntityAdapter<fromModels.ICourse>();

export const initialState: ICourseState = courseAdapter.getInitialState({
  loading: false,
  error: undefined,
});

export const courseReducer = createReducer(
  initialState,

  on(fromActions.loadCourse, (state) => {
    return courseAdapter.setAll([], {
      ...state,
      loading: true,
      error: undefined,
    });
  }),
  on(fromActions.loadCourseSuccess, (state, { payload }) =>
    courseAdapter.setAll([payload], {
      ...state,
      loading: false,
    })
  ),
  on(fromActions.loadCourseFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  })),
  on(fromActions.addCourseToWishList, (state, { payload }) =>
    courseAdapter.updateOne(
      {
        id: payload.courseId,
        changes: {
          ...payload,
          isAddedToWishlist: true,
        },
      },
      { ...state }
    )
  ),
  on(fromActions.addCourseToCart, (state, { payload }) =>
  courseAdapter.updateOne(
    {
      id: payload.courseId,
      changes: {
        ...payload,
        isAddedToCart: true,
      },
    },
    { ...state }
  )
  ),
);
export function reducer(
  state: ICourseState | undefined,
  action: Action
): ICourseState {
  return courseReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } =
  courseAdapter.getSelectors();

export const getCourseLoading = (state: ICourseState) => state.loading;
export const getCourseError = (state: ICourseState) => state.error;

