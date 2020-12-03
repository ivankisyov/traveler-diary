import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebap',
})
export class KebapPipe implements PipeTransform {
  transform(value: string): string {
    if (value.trim()) {
      return value
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .map((x) => x.toLocaleLowerCase())
        .join('-');
    }
    return value;
  }
}
