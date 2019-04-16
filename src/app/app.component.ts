import { Component, Input } from '@angular/core';
import InputBase from './models/InputBase'

import TextInput from './models/TextInput'
import NumberInput from './models/NumberInput'
import CheckboxInput from './models/CheckboxInput'
import DateInput from './models/DateInput'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-form';
  inputs: InputBase<any>[];

  constructor() {
    this.inputs = [
      new TextInput({
        name: 'Name',
        label: 'First Name',
        type: 'text',
        required: true
      }),
      new NumberInput({
        name: 'Namaae',
        label: 'First Name',
        type: 'number',
        required: true
      }),
      new CheckboxInput({
        name: 'Nameasdasdasd',
        label: 'First Nameasa',
        required: true
      }),
      new DateInput({
        name: 'date',
        label: 'date',
        required: true
      }),
    ]
  }

}
