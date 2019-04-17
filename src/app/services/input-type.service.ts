import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class InputTypeService {
  constructor() {}

  public getTypes(): Array<string> {
    return ['string', 'number', 'date', 'dropdown', 'checkbox']
  }
}
