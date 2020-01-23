import { IHouseState } from './../state/house.state';
import { IAppState } from './../state/app.state';
import { createSelector } from '@ngrx/store';

const selectHouses = (state: IAppState) => state.house;

export const selectHouseList = createSelector(
  selectHouses,
  (state: IHouseState) => state.houses
);

export const selectSelectedHouse = createSelector(
  selectHouses,
  (state: IHouseState) => state.selectedHouse
);
