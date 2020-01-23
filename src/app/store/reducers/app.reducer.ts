import { roomReducer } from './room.reducer';
import { houseReducer } from './house.reducer';
import { IAppState } from './../state/app.state';
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  house: houseReducer,
  room: roomReducer
};
