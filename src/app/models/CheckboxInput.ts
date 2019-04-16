import InputBase from './InputBase'

export default class TextboxQuestion extends InputBase<boolean> {
  inputType = 'checkbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
