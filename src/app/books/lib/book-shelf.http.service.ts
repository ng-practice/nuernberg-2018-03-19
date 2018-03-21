import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Book } from '../models/book';

interface BookRaw {
  title: string;
  subtitle: string;
  authors: string[];
  cover: string;
  description: string;
  isbn: string;
  rating: number;
}

@Injectable()
export class BookShelfHttp {
  apiEndpoint = 'http://localhost:4280';

  constructor(private _http: HttpClient) {}

  all(): Observable<Book[]> {
    return this._http
      .get<BookRaw[]>(`${this.apiEndpoint}/books`)
      .pipe(
        map(books => books.map(book => new Book(
          book.isbn,
          book.title,
          book.subtitle,
          book.authors,
          Math.random() * 100,
          book.rating,
          new Date(),
          book.cover
        )))
      );
  }

  update(book: Book) {
    return this._http
      .put(`${this.apiEndpoint}/book`, book);
  }
}
