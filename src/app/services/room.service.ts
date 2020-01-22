import { Injectable } from '@angular/core';
import { RoomApi, Room } from 'sdk-v1';

@Injectable({
  providedIn: 'root'
})
export class RoomService {


  constructor(private roomApi: RoomApi) { }

  getHouse(id: string) {
    return this.roomApi.getHouse(id).toPromise();
  }
  getRooms() {
    return this.roomApi.find<Room>().toPromise();
  }

  getRoom(id: string) {
    return this.roomApi.findById<Room>(id);
  }

  createRoom(val: { roomName: string; }) {
    const room = new Room();
    room.roomName = val.roomName;
    return this.roomApi.create<Room>(room).toPromise();
  }

  deleteRoom(id: any) {
    return this.roomApi.deleteById<Room>(id).toPromise();
  }

  updateRoom(val: { roomName: string; id: any; }) {
    const room = new Room();
    room.roomName = val.roomName;
    return this.roomApi.updateAttributes<Room>(val.id, room).toPromise();
  }

}
