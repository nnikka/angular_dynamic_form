import InputBase from './InputBase'

export default class NumberInput extends InputBase<string> {
  inputType: string = 'number';
  type: string = 'number';

  constructor(options: {} = {}) {
    super(options);
  }
}
