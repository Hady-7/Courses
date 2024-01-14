import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromModels from '../../models';

export interface IAppState extends EntityState<fromModels.ICourse> {

}

export const appAdapter = createEntityAdapter<fromModels.ICourse>();

export const initialState: IAppState = appAdapter.getInitialState({

});

export const appReducer = createReducer(
  initialState,
);

export function reducer(
  state: IAppState | undefined,
  action: Action
): IAppState {
  return appReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } =
  appAdapter.getSelectors();
