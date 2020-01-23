import { House } from 'sdk-v1';

export interface IHouseState {
  houses: House[];
  selectedHouse: House;
}

export const initialHouseState: IHouseState = {
  houses: null,
  selectedHouse: null
}

// export const initializeHouseState  = (): HouseState => {
//   return { houses: Array<House>(), houseError: null }
// };


