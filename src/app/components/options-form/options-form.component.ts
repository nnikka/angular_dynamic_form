import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-options-form',
  templateUrl: './options-form.component.html',
  styleUrls: ['./options-form.component.css']
})
export class OptionsFormComponent implements OnInit, OnDestroy {

  @Output() onChangeOptions: EventEmitter<string[]> = new EventEmitter<string[]>()

  subscription: Subscription;
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
    this.subscription = this.form.valueChanges.subscribe(val => {
      this.onChangeOptions.emit(Object.values(val))
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
