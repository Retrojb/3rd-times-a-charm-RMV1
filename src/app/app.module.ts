import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoomService, HouseService } from './services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HouseService,
    RoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
