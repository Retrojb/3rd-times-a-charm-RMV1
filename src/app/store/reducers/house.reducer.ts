import { IHouseState } from './../state/house.state';
import { EHouseActions } from './../actions/house.action';
import {HouseActions} from '../actions/house.action';
import { Action } from '@ngrx/store';
import { House } from 'sdk-v1';


export const houseFeatureKey = 'house';

export interface State {
  houses: Array<House>;
  selectedHouse: House;
}

export const initialHouseState: IHouseState = {
  houses: null,
  selectedHouse: null
};

export const houseReducer = (
  state = initialHouseState,
  action: HouseActions
): IHouseState => {
  switch (action.type) {
    case EHouseActions.GetHousesSuccess {
      return {
        ...state,
        houses: action.payload
      };
    }
    case EHouseActions.GetOneHouseSuccess {
      return {
        ...state,
        selectedHouse: action.payload
      };
    }

    default:
      return state;
  }
};

export function reducer(state: State | undefined, action: HouseActions) {
  return houseReducer(state, action);
}

