import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  @Output('onAddCar') carEmmiter = new EventEmitter<{name: string, year: number}>();
  @ViewChild('carYearInput', { static: false }) carYearInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addCar(carNameEl: HTMLInputElement) {
    this.carEmmiter.emit({
      name: carNameEl.value,
      year: +this.carYearInput.nativeElement.value
    });
    carNameEl.value = '';
    this.carYearInput.nativeElement.value = 2017;
  }

}
