import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'

@Component({
  selector: 'app-options-form',
  templateUrl: './options-form.component.html',
  styleUrls: ['./options-form.component.css']
})
export class OptionsFormComponent implements OnInit {

  @Output() onChangeOptions: EventEmitter<string[]> = new EventEmitter<string[]>()

  objectKeys = Object.keys;
  form: FormGroup;
  optionCount: number = 1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({})
    this.generateNewOptionInput()
    this.onOptionChange()
  }

  generateNewOptionInput() {
    this.form.addControl('option' + this.optionCount, new FormControl(''))
    this.optionCount++
  }

  reset() {
    this.form = this.formBuilder.group({})
    this.onChangeOptions.emit([])
    this.optionCount = 1
  }

  onOptionChange() {
    this.form.valueChanges.subscribe(val => {
      this.onChangeOptions.emit(Object.values(val))
    })
  }

}
