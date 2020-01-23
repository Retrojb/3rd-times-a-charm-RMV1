import { roomReducer, IRoomState, initialRoomState } from './room.reducer';
import { houseReducer, initialHouseState, IHouseState } from './house.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface IAppState {
  router?: RouterReducerState;
  house: IHouseState;
  room: IRoomState;
}

export const initialAppState: IAppState = {
  house: initialHouseState,
  room: initialRoomState
};

export function getInitialState(): IAppState {
  return initialAppState;
}

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  house: houseReducer,
  room: roomReducer
};
