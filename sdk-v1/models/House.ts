/* tslint:disable */
import {
  Room
} from '../index';

declare var Object: any;
export interface HouseInterface {
  "houseName"?: string;
  "street"?: string;
  "city"?: string;
  "state"?: string;
  "zipcode"?: string;
  "type"?: string;
  "id"?: any;
  rooms?: Room[];
}

export class House implements HouseInterface {
  "houseName": string;
  "street": string;
  "city": string;
  "state": string;
  "zipcode": string;
  "type": string;
  "id": any;
  rooms: Room[];
  constructor(data?: HouseInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `House`.
   */
  public static getModelName() {
    return "House";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of House for dynamic purposes.
  **/
  public static factory(data: HouseInterface): House{
    return new House(data);
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
      name: 'House',
      plural: 'Houses',
      path: 'Houses',
      idName: 'id',
      properties: {
        "houseName": {
          name: 'houseName',
          type: 'string'
        },
        "street": {
          name: 'street',
          type: 'string'
        },
        "city": {
          name: 'city',
          type: 'string'
        },
        "state": {
          name: 'state',
          type: 'string'
        },
        "zipcode": {
          name: 'zipcode',
          type: 'string'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        rooms: {
          name: 'rooms',
          type: 'Room[]',
          model: 'Room',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'houseId'
        },
      }
    }
  }
}
