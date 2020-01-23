import { reducer, initialHouseState } from './house.reducer';

describe('House Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialHouseState, action);

      expect(result).toBe(initialHouseState);
    });
  });
});
