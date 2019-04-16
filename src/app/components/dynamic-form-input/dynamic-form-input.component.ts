import { Component, OnInit, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'
import InputBase from '../../models/InputBase'

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css']
})
export class DynamicFormInputComponent implements OnInit {
  @Input() input: InputBase<any>
  @Input() form: FormGroup
  get isValid() {
    return this.form.controls[this.input.name].valid
  }
  get touched() {
    return this.form.controls[this.input.name].touched
  }

  constructor() {}

  ngOnInit() {
    console.log(this.input)
  }
}
