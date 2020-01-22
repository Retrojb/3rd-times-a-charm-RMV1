import { Action, createReducer, on } from '@ngrx/store';
import { House } from 'sdk-v1';


export const houseFeatureKey = 'house';

export interface State {
  house: Array<House>;
}

export const initialState: State = {
  house: []
};

const houseReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return houseReducer(state, action);
}
