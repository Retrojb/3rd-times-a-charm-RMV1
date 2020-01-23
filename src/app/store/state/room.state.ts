import { Room } from 'sdk-v1';

export interface IRoomState {
  rooms: Room[];
  selectedRoom: Room;
}

export const initialRoomState: IRoomState = {
  rooms: null,
  selectedRoom: null
};
