import { createSelector } from '@ngrx/store';
import { IAppState } from '../reducers/app.reducer';
import { IRoomState } from '../reducers/room.reducer';

const selectRooms = (state: IAppState) => state.room;

export const selectRoomList = createSelector(
  selectRooms,
  (state: IRoomState) => state.rooms
);

export const selectSelectedHouse = createSelector(
  selectRooms,
  (state: IRoomState) => state.selectedRoom
);
