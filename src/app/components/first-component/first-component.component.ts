import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name: string = 'Daniel'
  age: number = 22
  job: string = 'Programador'
  hobbies = ['correr', 'jogar', 'estudar']

}
