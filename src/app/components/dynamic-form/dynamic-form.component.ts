import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import InputBase from '../../models/InputBase';
import { DynamicFormService } from '../../services/dynamic-form.service'
import { JsonpCallbackContext } from '@angular/common/http/src/jsonp';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() inputs: InputBase<any>[] = [];
  form: FormGroup;
  formResult: string = '';

  get formIsEmpty() {
    return Object.keys(this.form.controls).length == 0
  }

  constructor(private dynamicFormService: DynamicFormService) { }

  ngOnInit() {
    this.form = this.dynamicFormService.create(this.inputs)
  }

  ngOnChanges() {
    this.form = this.dynamicFormService.create(this.inputs)
  }

  onSubmit() {
    this.formResult = JSON.stringify(this.form.value)
  }

}
