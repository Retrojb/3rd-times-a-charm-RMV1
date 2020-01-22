import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoomService, HouseService } from './services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SocketDriver } from 'sdk-v1/sockets/socket.driver';
import { HttpClientModule } from '@angular/common/http';
import { SocketConnection } from 'sdk-v1/sockets/socket.connections';
import { SDKModels, LoopBackAuth, ErrorHandler, InternalStorage } from 'sdk-v1';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
  ],
  providers: [
    HouseService,
    RoomService,
    SocketConnection,
    SDKModels,
    LoopBackAuth,
    InternalStorage,
    ErrorHandler,
    SocketDriver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
