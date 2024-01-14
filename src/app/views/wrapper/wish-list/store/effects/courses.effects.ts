
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap ,tap } from 'rxjs/operators';
import * as fromActions from '../actions';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
  ) {}


}
