import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions';
import * as fromModels from '../../models';

export interface ICoursesState extends EntityState<fromModels.ICourse> {
  error: undefined;
  loading: boolean;
}

export const coursesAdapter = createEntityAdapter<fromModels.ICourse>();

export const initialState: ICoursesState = coursesAdapter.getInitialState({
  loading: false,
  error: undefined,
});

export const courseReducer = createReducer(
  initialState,

  on(fromActions.loadCourses, (state) => {
    return coursesAdapter.setAll([], {
      ...state,
      loading: true,
      error: undefined,
    });
  }),
  on(fromActions.loadCoursesSuccess, (state, { payload }) =>
    coursesAdapter.setAll(payload, {
      ...state,
      loading: false,
    })
  ),
  on(fromActions.loadCoursesFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  })),
  on(fromActions.addCourseToWishList, (state, { payload }) =>
    coursesAdapter.updateOne(
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
  coursesAdapter.updateOne(
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
  state: ICoursesState | undefined,
  action: Action
): ICoursesState {
  return courseReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } =
  coursesAdapter.getSelectors();

export const getCoursesLoading = (state: ICoursesState) => state.loading;
export const getCoursesError = (state: ICoursesState) => state.error;

