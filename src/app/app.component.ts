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
    this.inputs = []
  }

  handeGenerateForm($event:InputBase<any>[]) {
    this.inputs = $event
  }

}
