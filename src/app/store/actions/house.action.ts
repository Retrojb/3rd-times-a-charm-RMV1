import { Action } from '@ngrx/store';
import { House } from 'sdk-v1';

export enum EHouseActions {
  GetHouses = '[House] Get Houses',
  GetHousesSuccess = '[House] Successfully got houses',
  GetHousesFailure = '[House] Failed to get houses',
  GetOneHouse = '[House] Get one house',
  GetOneHouseSuccess = '[House] Successfully got one house',
  GetOneHouseFailure = '[House] Failed to get one house'
}

export class GetHouses implements Action {
  public readonly type = EHouseActions.GetHouses;
}

export class GetHousesSuccess implements Action {
  public readonly type = EHouseActions.GetHousesSuccess;
  constructor(public payload: House[]) {}
}

export class GetHousesFailure implements Action {
  public readonly type = EHouseActions.GetHousesFailure;
  constructor(public payload: Error) {}
}

export class GetOneHouse implements Action {
  public readonly type = EHouseActions.GetOneHouse;
  constructor( public payload: House) {}
}

export class GetOneHouseSuccess implements Action {
  public readonly type = EHouseActions.GetOneHouseSuccess;
  constructor( public payload: House) {}
}

export class GetOneHouseFailure implements Action {
  public readonly type = EHouseActions.GetOneHouseFailure;
  constructor(public payload: Error) {}
}

export type HouseActions =
    GetHouses
  | GetHousesSuccess
  | GetHousesFailure
  | GetOneHouse
  | GetOneHouseSuccess
  | GetOneHouseFailure
  ;
