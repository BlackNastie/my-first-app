import { Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  //addCarStatus = '';
  carName = '';
  addCarStatus= false;
  cars = ['ford','bmw','audi'];
  items = [{id:3, name: 'item 1'},{id:6, name: 'item 2'},{id:9, name: 'item 3'}];

  constructor() {

  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }


}
