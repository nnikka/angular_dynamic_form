import InputBase from './InputBase'

export default class TextInput extends InputBase<string> {
  inputType = 'string';
  type: string = 'text';

  constructor(options: {} = {}) {
    super(options);
  }
}
