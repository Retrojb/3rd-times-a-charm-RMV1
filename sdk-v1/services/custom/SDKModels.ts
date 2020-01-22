/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { House } from '../../models/House';
import { Room } from '../../models/Room';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    House: House,
    Room: Room,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
