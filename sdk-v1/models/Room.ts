/* tslint:disable */
import {
  House
} from '../index';

declare var Object: any;
export interface RoomInterface {
  "roomName"?: string;
  "roomOwner"?: string;
  "id"?: any;
  "roomId"?: any;
  "houseId"?: any;
  house?: House;
}

export class Room implements RoomInterface {
  "roomName": string;
  "roomOwner": string;
  "id": any;
  "roomId": any;
  "houseId": any;
  house: House;
  constructor(data?: RoomInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Room`.
   */
  public static getModelName() {
    return "Room";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Room for dynamic purposes.
  **/
  public static factory(data: RoomInterface): Room{
    return new Room(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Room',
      plural: 'rooms',
      path: 'rooms',
      idName: 'id',
      properties: {
        "roomName": {
          name: 'roomName',
          type: 'string'
        },
        "roomOwner": {
          name: 'roomOwner',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "roomId": {
          name: 'roomId',
          type: 'any'
        },
        "houseId": {
          name: 'houseId',
          type: 'any'
        },
      },
      relations: {
        house: {
          name: 'house',
          type: 'House',
          model: 'House',
          relationType: 'belongsTo',
                  keyFrom: 'roomId',
          keyTo: 'id'
        },
      }
    }
  }
}
