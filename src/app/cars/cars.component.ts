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
  cars = ['ford','bmw','audi', 'mazda', 'kia', 'bentley'];

  constructor() {

  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  setBigCarText(car: string) {
    return car.length > 4 ? true : false;
  }
}
