import { Component } from '@angular/core';
import {of} from "rxjs";
import {delay, subscribeOn} from "rxjs/operators";



@Component({
  selector: 'app-root',
  template: `<div class="col-xs-8 col-xs-offset-2">
    <h1>{{title}}</h1>
    <input class="form-control" type="text" [(ngModel)]="searchCar" >
    <button class="btn btn-primary" (click)="addCar()">Add car!</button>
    <hr>
    <ul class="list-group">
      <li class="list-group-item"
      *ngFor="let car of cars | carFilter:searchCar: 'name'; let i = index;">
        <b>{{ i + 1 }}</b> {{car.name}} <i>{{ car.desc }}</i>
      </li>
    </ul>
  </div>`
})

export class AppComponent {
  searchCar = '';
  cars = [
    {name: 'Ford', desc: 'desc 1'},
    {name: 'Mazda', desc: 'desc 2'},
    {name: 'Bentley', desc: 'desc 3'},
    {name: 'BMW', desc: 'desc 4'},
    {name: 'Audi', desc: 'desc 5'},
    {name: 'Mercedec', desc: 'desc 6'},
  ];

  title = '';

  asyncTitle = of('Async title 3 sec')
      .pipe(delay(3000))
      .subscribe((str) => this.title = str);

  addCar() {
    this.cars.push({
      name: "New Car",
      desc: "WTF!"
    });
  }
}
