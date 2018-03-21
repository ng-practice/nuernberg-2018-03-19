import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { catchError, map } from 'rxjs/operators';

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

  single(isbn: string): Observable<Book> {
    return this._http
      .get<BookRaw>(`${this.apiEndpoint}/book/${isbn}`)
      .pipe(map(bookRaw => this._createBook(bookRaw)));
  }

  private _createBook(bookRaw: BookRaw): Book {
    return new Book(
      bookRaw.isbn,
      bookRaw.title,
      bookRaw.subtitle,
      bookRaw.authors,
      Math.random() * 100,
      bookRaw.description,
      bookRaw.rating,
      new Date(),
      bookRaw.cover
    );
  }

  all(): Observable<Book[]> {
    return this._http
      .get<BookRaw[]>(`${this.apiEndpoint}/books`)
      .pipe(map(books => books.map(book => this._createBook(book))));
  }

  update(book: Book) {
    return this._http
      .put(`${this.apiEndpoint}/book`, book)
      .pipe(
        catchError(err =>
          _throw(new Error('Kritischer Fehler! API nicht erreichbar.'))
        )
      );
  }
}
