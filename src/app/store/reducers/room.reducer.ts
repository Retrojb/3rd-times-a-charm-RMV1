import { Action, createReducer, on } from '@ngrx/store';
import { Room } from 'sdk-v1';


export const roomFeatureKey = 'room';

export interface State {
  room: Array<Room>
}

export const initialState: State = {
  room: []
};

const roomReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return roomReducer(state, action);
}
