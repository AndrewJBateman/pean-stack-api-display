import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleNosource'
})
export class TitleNosourcePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
