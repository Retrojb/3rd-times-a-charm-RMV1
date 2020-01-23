import { HouseService } from './../../services/house.service';
import { EHouseActions, GetHousesSuccess } from '../actions/house.action';
import { GetOneHouse, GetOneHouseSuccess, GetHouses } from './../actions/house.action';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { selectHouseList } from '../selectors/house.selector';
import { IAppState } from '../reducers/app.reducer';
import { House } from 'sdk-v1';

@Injectable()
export class HouseEffects {
  @Effect()
    getOneHouse$ = this.actions.pipe(
      ofType<GetOneHouse>(EHouseActions.GetOneHouse),
      map(action => action.payload),
      withLatestFrom(this.store.pipe(select(selectHouseList))),
      switchMap(([id, houses]) => {
        const selectedHouse = houses.filter(house => house.id === +id)[0];
        return of(new GetOneHouseSuccess(selectedHouse));
      } )
    );

    @Effect()
      getHouses$ = this.actions.pipe(
        ofType<GetHouses>(EHouseActions.GetHouses),
        switchMap(() => this.houseService.getHouses()),
        switchMap((house: House[]) => of(new GetHousesSuccess(house)))
      );

    constructor(private actions: Actions,
                private houseService: HouseService,
                private store: Store<IAppState>) {}
}
