import { IAppState } from './../state/app.state';
import { HouseService } from './../../services/house.service';
import { EHouseActions } from '../actions/house.action';
import { GetOneHouse, GetOneHouseSuccess, GetHouses } from './../actions/house.action';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { selectHouseList } from '../selectors/house.selector';

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
        switchMap(() => this.houseService.getHouses())
      );

    constructor(private actions: Actions,
                private houseService: HouseService,
                private store: Store<IAppState>) {}
}
