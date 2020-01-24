import { RoomApi } from './../../sdk-v1/services/custom/Room';
import { HouseApi } from './../../sdk-v1/services/custom/House';
import { appReducers } from './store/reducers/app.reducer';
import { HouseEffects } from './store/effects/house.effect';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoomService, HouseService } from './services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SocketDriver } from 'sdk-v1/sockets/socket.driver';
import { HttpClientModule } from '@angular/common/http';
import { SocketConnection } from 'sdk-v1/sockets/socket.connections';
import { SDKModels, LoopBackAuth, ErrorHandler, InternalStorage } from 'sdk-v1';
import { EffectsModule } from '@ngrx/effects';
import { RoomEffects } from './store/effects/room.effect';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RoomsComponent } from './containers/rooms/rooms.component';
import { RoomComponent } from './containers/room/room.component';
import { HousesComponent } from './components/houses/houses.component';
import { HouseListComponent } from './containers/houses/house-list/house-list.component';
import { HouseComponent } from './containers/house/house.component';
@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    HousesComponent,
    HouseComponent,
    RoomComponent,
    HouseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([
      HouseEffects,
      RoomEffects
    ]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    HouseService,
    RoomService,
    HouseApi,
    RoomApi,
    SocketConnection,
    SDKModels,
    LoopBackAuth,
    InternalStorage,
    ErrorHandler,
    SocketDriver
  ],
  exports: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
