
import { createSelector } from '@ngrx/store';
import { IAppState } from '../reducers/app.reducer';
import { IHouseState } from '../reducers/house.reducer';

const selectHouses = (state: IAppState) => state.house;

export const selectHouseList = createSelector(
  selectHouses,
  (state: IHouseState) => state.houses
);

export const selectSelectedHouse = createSelector(
  selectHouses,
  (state: IHouseState) => state.selectedHouse
);
