import { ERoomActions } from './../actions/room.action';
import { IRoomState } from './../state/room.state';
import { Action, createReducer, on } from '@ngrx/store';
import { Room } from 'sdk-v1';
import { RoomActions } from '../actions/room.action';


export const roomFeatureKey = 'room';

export interface State {
  rooms: Array<Room>;
  selectedRoom: Room;
}

export const initialRoomState: IRoomState = {
  rooms: null,
  selectedRoom: null
};


export const roomReducer = (
  state = initialRoomState,
  action: RoomActions
): IRoomState => {
  switch (action.type) {
    case ERoomActions.GetRoomsSuccess {
      return {
        ...state,
        rooms: action.payload
      };
    }
    case ERoomActions.GetOneRoomSuccess {
      return {
        ...state,
        selectedRoom: action.payload
      };
    }

    default:
      return state;
  }
};

export function reducer(state: State | undefined, action: RoomActions) {
  return roomReducer(state, action);
}
