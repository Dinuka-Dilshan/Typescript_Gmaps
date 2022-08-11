import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable{
  compnyName: string;
  catchPharse: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.compnyName = faker.company.name();
    this.catchPharse = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }

  markerContent = (): string => {
    return `
      <div>
      <h2>Company Name: ${this.compnyName} </h2>
      <h3>Catch pharse: ${this.catchPharse}</h3>
      </div> 
    `;
  };
}
