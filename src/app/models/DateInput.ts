import InputBase from './InputBase'

export default class TextboxQuestion extends InputBase<string> {
  inputType = 'date';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
