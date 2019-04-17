import { Injectable } from '@angular/core'
import InputBase from '../models/InputBase'
import TextInput from '../models/TextInput'
import NumberInput from '../models/NumberInput'
import DateInput from '../models/DateInput'
import CheckboxInput from '../models/CheckboxInput'
import DropdownInput from '../models/DropdownInput'

@Injectable({
  providedIn: 'root'
})
export class InputService {
  constructor() {}

  private generateInput(type, data): InputBase<any> {
    switch (type) {
      case 'string':
        return new TextInput(data)
      case 'number':
        return new NumberInput(data)
      case 'checkbox':
        return new CheckboxInput(data)
      case 'date':
        return new DateInput(data)
      case 'dropdown':
        return new DropdownInput(data)
    }
  }

  public generateInputs(inputsData): InputBase<any>[] {
    let result: InputBase<any>[] = []
    Object.keys(inputsData).forEach(name => {
      let options = inputsData[name]
      result.push(
        this.generateInput(options.type, {
          name: name,
          label: options.label,
          required: options.required,
          options: options.options
        })
      )
    })
    console.log(result)
    return result
  }
}
