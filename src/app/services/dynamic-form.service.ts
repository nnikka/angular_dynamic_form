import { Injectable } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import InputBase from '../models/InputBase'

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {
  constructor() {}

  create(inputs: InputBase<any>[]) {
    let form: any = {}
    inputs.forEach(input => {
      form[input.name] = input.required
        ? new FormControl(input.value || '', Validators.required)
        : new FormControl(input.value || '')
    })
    return new FormGroup(form)
  }
}
