import { IRoomState, initialRoomState } from './room.state';
import { IHouseState, initialHouseState } from './house.state';
import { RouterReducerState } from '@ngrx/router-store';

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
