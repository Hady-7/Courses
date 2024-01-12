import * as fromModels from '../../models';
import { createAction, props } from '@ngrx/store';


export const loadCart = createAction('[Course] Load Cart');
export const loadCartSuccess = createAction(
  '[Course] Load Cart Success',
  props<{ payload: fromModels.ICourse[] }>()
);
export const loadCartFailure = createAction(
  '[Course] Load Cart Failure',
  props<{ payload }>()
);
