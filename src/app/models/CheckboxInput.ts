import InputBase from './InputBase'

export default class CheckboxInput extends InputBase<boolean> {
  inputType = 'checkbox';

  constructor(options: {} = {}) {
    super(options);
  }
}
