import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPrefix'
})
export class NumberPrefixPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
