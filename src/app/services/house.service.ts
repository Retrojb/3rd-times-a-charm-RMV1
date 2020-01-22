import { Injectable } from '@angular/core';
import { LoopBackFilter, HouseApi, RoomApi, House } from 'sdk-v1';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private houseApi: HouseApi,
              private roomApi: RoomApi) { }

  getHouses() {
    return this.houseApi.find<House>()
    .toPromise();
  }

  getHouse(id) {
    return this.houseApi.findById<House>(id);
  }

  getRoomsForHouse() {
    return this.roomApi.find().toPromise();
  }

  getRoomsByHouse(id){
    const filter: LoopBackFilter = {
      include: {
        relation: 'room'
      },
      where: {
         houseId: id
       }
    };
    return this.houseApi.find<House>(filter)
     .toPromise();
  }

  createHouse(val) {
    const data = new House();
    data.houseName = val.houseName;
    data.zipcode = val.zipcode;
    return this.houseApi.create<House>(data)
          .toPromise();
  }

  updateHouse(val) {
    const data = new House();
    data.houseName = val.houseName;
    data.zipcode = val.zipcode;
    return this.houseApi.updateAttributes<House>(val.id, data);
  }

  deleteHouse(id) {
    return this.houseApi.deleteById<House>(id)
      .toPromise();
  }
}
