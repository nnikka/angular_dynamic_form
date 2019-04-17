import InputBase from './InputBase'

export default class DateInput extends InputBase<string> {
  inputType = 'date';

  constructor(options: {} = {}) {
    super(options);
  }
}
