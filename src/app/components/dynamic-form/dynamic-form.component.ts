import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import InputBase from '../../models/InputBase';
import { DynamicFormService } from '../../services/dynamic-form.service'

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() inputs: InputBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private dynamicFormService: DynamicFormService) { }

  ngOnInit() {
    this.form = this.dynamicFormService.create(this.inputs)
  }

  onSubmit() {
    console.log(this.form)
  }

}
