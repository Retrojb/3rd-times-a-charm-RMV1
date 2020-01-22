import { Action } from '@ngrx/store';
import { Room } from 'sdk-v1';

export enum EHouseActions {
  GetRooms = '[Room] Get rooms',
  GetRoomsSuccess = '[Room] Successfully got rooms',
  GetRoomsFailure = '[Room] Failed to get rooms',
  GetOneRoom = '[Room] Get one room',
  GetOneRoomSuccess = '[Room] Successfully got one room',
  GetOneRoomFailure = '[Room] Failed to get one room'
}

export class GetRooms implements Action {
  public readonly type = EHouseActions.GetRooms;
}

export class GetRoomsSuccess implements Action {
  public readonly type = EHouseActions.GetRoomsSuccess;
  constructor(payload: Room[]) {}
}

export class GetRoomsFailure implements Action {
  public readonly type = EHouseActions.GetRoomsFailure;
  constructor(payload: Error) {}
}

export class GetOneRoom implements Action {
  public readonly type = EHouseActions.GetOneRoom;
}

export class GetOneRoomSuccess implements Action {
  public readonly type = EHouseActions.GetOneRoomSuccess;
  constructor(payload: Room[]) {}
}

export class GetOneRoomFailure implements Action {
  public readonly type = EHouseActions.GetOneRoomFailure;
  constructor(payload: Error) {}
}

export type HouseActions =
    GetRooms
  | GetRoomsSuccess
  | GetRoomsFailure
  | GetOneRoom
  | GetOneRoomSuccess
  | GetOneRoomFailure
  ;
