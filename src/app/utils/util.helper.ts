import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Util {
  constructor() {}

  addCommas(val: any) {
    return val
      .toString()
      .replace(/\D/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  replaceComma(val: any) {
    return val.toString().replace(/,/g, '');
  }
}
