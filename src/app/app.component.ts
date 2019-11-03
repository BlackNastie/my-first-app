import { Component, OnInit } from '@angular/core';
import { CarService } from "./car.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CarService]
})
export class AppComponent implements OnInit{

  cars = [];
  constructor(private service: CarService) {}

  ngOnInit(): void {
    this.cars = this.service.cars;
  }

  addCarToList(carName: string) {
    this.service.addCar(carName);
  }
}
