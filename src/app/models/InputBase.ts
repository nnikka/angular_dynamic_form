export default class InputBase<T> {
  value: T
  inputType: string
  name: string
  label: string
  required: boolean
  options: string[]

  constructor(
    options: {
      value?: T
      name?: string
      label?: string
      required?: boolean
      inputType?: string
    } = {}
  ) {
    this.name = options.name
    this.value = options.value
    this.label = options.label || ''
    this.required = options.required
    this.inputType = options.inputType || ''
  }
}
