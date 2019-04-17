import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { InputTypeService } from '../../services/input-type.service'
import { InputService } from '../../services/input.service'
import InputBase from '../../models/InputBase'

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css']
})
export class FormCreatorComponent implements OnInit {
  @Output() onGenerateForm: EventEmitter<InputBase<any>[]> = new EventEmitter<
    InputBase<any>[]
  >()

  inputTypes: Array<string>
  objectKeys = Object.keys
  inputCounter: number = 1
  inputsData = {}

  constructor(
    private inputTypeService: InputTypeService,
    private inputService: InputService
  ) {
    this.inputTypes = this.inputTypeService.getTypes()
  }

  ngOnInit() {
    this.generateNewInputConfiguration()
  }

  generateNewInputConfiguration() {
    let name = 'input' + this.inputCounter
    this.inputsData[name] = {}
    this.inputCounter++
  }

  handeInputConfigChange(inputName, $event) {
    this.inputsData[inputName] = $event
  }

  generateForm() {
    this.onGenerateForm.emit(this.inputService.generateInputs(this.inputsData))
  }

  reset() {
    this.inputsData = {}
    this.inputCounter = 1
  }
}
