import { Component} from '@angular/core';

interface Car {
  name: string;
  year: number;
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  //addCarStatus = '';
  carName = '';
  carYear = 2017;
  addCarStatus = false;
  cars: Car[] = [{
    name: 'ford',
    year: 2007
  }, {
    name: 'bmw',
    year: 2011
  }, {
    name: 'audi',
    year: 2009
  }, {
    name: 'mazda',
    year: 2013
  }, {
    name: 'bentley',
    year: 2015
  }];

  constructor() {

  }

  addCar() {

    this.cars.push({
      name: this.carName,
      year: this.carYear
    });
    this.carName = '';
    this.carYear = 2017;
  }


}
