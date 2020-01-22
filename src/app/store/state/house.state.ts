import { House } from 'sdk-v1';

export default class HouseState {
  Houses: Array<House>;
  HousesError: Error;
}

export const initializeState = (): HouseState => {
  return {
     Houses: Array<House>(), HousesError: null
  };

}
