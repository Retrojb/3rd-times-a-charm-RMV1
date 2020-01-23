import { IAppState } from './../state/app.state';
import { createSelector } from '@ngrx/store';
import { IRoomState } from '../state/room.state';

const selectRooms = (state: IAppState) => state.room;

export const selectRoomList = createSelector(
  selectRooms,
  (state: IRoomState) => state.rooms
);

export const selectSelectedHouse = createSelector(
  selectRooms,
  (state: IRoomState) => state.selectedRoom
);
