import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  // template: `
  //   <h2>Single Car</h2>
  //   <p>sgmkdfmhdf jgjfjg</p>
  // `,
  //styleUrls: ['./car.component.css']
  styles: [`
    h2 {
      color: aqua;
    }
  `]
})
export class CarComponent {
  carName = 'Ford';
  carYear = 2017;

  getName () {
    return this.carName
  }
}
