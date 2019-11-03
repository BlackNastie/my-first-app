import { Component, EventEmitter, Output } from '@angular/core';
import {CarService} from "../car.service";

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent{

  constructor(private service: CarService) {}
  carName = '';

  addCar() {
    this.service.addCar(this.carName);
    this.carName = '';
  }

}
