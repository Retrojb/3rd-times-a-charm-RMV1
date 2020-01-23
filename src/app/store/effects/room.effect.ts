import { GetRooms, ERoomActions, GetOneRoom, GetOneRoomSuccess } from './../actions/room.action';
import { IAppState } from './../state/app.state';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { RoomService } from 'src/app/services';

@Injectable()
export class RoomEffects {
  @Effect()
    getOneRoom$ = this.actions.pipe(
      ofType<GetOneRoom>(ERoomActions.GetOneRoom),
      map(action => action.payload),
      withLatestFrom(this.store.pipe(select(selectRoomList))),
      switchMap(([id, rooms]) => {
        const selectedRoom = rooms.filter(room => room.id === +id)[0];
        return of(new GetOneRoomSuccess(selectedRoom));
      } )
    );

    @Effect()
      getHouses$ = this.actions.pipe(
        ofType<GetRooms>(ERoomActions.GetRooms),
        switchMap(() => this.roomService.getRooms())
      );

    constructor(private actions: Actions,
                private roomService: RoomService,
                private store: Store<IAppState>) {}
}
