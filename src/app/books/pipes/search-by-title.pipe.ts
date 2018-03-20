import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'searchByTitle'
})
export class SearchByTitlePipe implements PipeTransform {

  transform(books: Book[], query: string): Book[] {
    if (!books || !query) {
      return books;
    }

    return books.filter(b => this._match(b.title, query));
  }

  private _match(title: string, query: string) {
    return title
      .toLowerCase()
      .includes(query.toLowerCase());
  }
}
