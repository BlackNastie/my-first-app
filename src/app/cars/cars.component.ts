import {Component, ViewEncapsulation} from '@angular/core';

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

  cars: Car[] = [{
    name: 'ford',
    year: 2007
   }, //{
  //   name: 'bmw',
  //   year: 2011
  // }, {
  //   name: 'audi',
  //   year: 2009
  // }, {
  //   name: 'mazda',
  //   year: 2013
  // }, {
  //   name: 'bentley',
  //   year: 2015
  // }
  ];

  constructor() {

  }

  updateCarList(car: {    name: string, year: number  }) {
    this.cars.push(car);
  }

  changeCarName() {
    this.cars[0].name = 'new car name!';
  }

  deleteCar() {
    this.cars.splice(0,1);
  }
}
