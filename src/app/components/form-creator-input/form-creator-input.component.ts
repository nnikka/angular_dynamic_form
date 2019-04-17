import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-form-creator-input',
  templateUrl: './form-creator-input.component.html',
  styleUrls: ['./form-creator-input.component.css']
})
export class FormCreatorInputComponent implements OnInit {
  @Input() inputTypes: Array<string>
  @Output() changeInputConfiguration: EventEmitter<any> = new EventEmitter<any>()

  form: FormGroup
  get dropdownIsSelected() {
    return this.form.controls.type
      ? this.form.controls.type.value == 'dropdown'
      : false
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      label: '',
      type: 'string',
      required: false,
      options: null
    })
    this.changeInputConfiguration.emit(this.form.value)
    this.onChange()
  }

  onChange() {
    this.form.valueChanges.subscribe(val => {
      this.changeInputConfiguration.emit(val)
    })
  }

  handleOptionsChange($event) {
    this.form.controls.options.setValue($event)
  }
}
