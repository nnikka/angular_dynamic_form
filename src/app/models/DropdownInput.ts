import InputBase from './InputBase'

export default class DropdownInput extends InputBase<string> {
  inputType = 'dropdown';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || []
  }
}
