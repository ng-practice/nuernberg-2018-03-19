import { Pipe, PipeTransform } from '@angular/core';

// {{ data.isbn | isbn }}
@Pipe({
  name: 'isbn'
})
export class IsbnPipe implements PipeTransform {
  /**
   * 1234567891 -> 1234 6789 1
   * @param isbn
   * @param args
   */
  transform(
    isbn: string,
    groupLength = 4,
    seperator = ' '): string {
    const trimmed = isbn.trim();
    const groups = [];

    for (let i = 0; i < trimmed.length; i += groupLength) {
      groups.push(trimmed.substr(i, groupLength));
    }

    return groups.join(seperator);
  }

}
