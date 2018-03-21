import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, delay, tap } from 'rxjs/operators';

import { BookShelfHttp } from './lib/book-shelf.http.service';
import { byRating } from './lib/by-rating';
import { Book } from './models/book';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tr-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;

  isBusy = true;
  errorMessage: string;

  query: string;
  books: Book[];
  books$: Observable<Book[]>;
  constructor(private _booksShelf: BookShelfHttp) {}

  ngOnInit(): void {
    this.books$ = this._booksShelf
      .all()
      .pipe(
        delay(2000),
        map(books => this.sort(books)),
        tap(books => (this.books = books)),
        tap(() => this.isBusy = false)
      );
  }

  ngOnDestroy(): void {
    /** VARIANTE 1 */
    /** unsubscribe from stream */
    // this._subscription.unsubscribe();
  }

  updateSearchQueary(event: KeyboardEvent) {
    this.query = (<HTMLInputElement>event.target).value;
  }

  sort(books: Book[]): Book[] {
    return [...books].sort(byRating);
  }

  sortAfterRating(): void {
    this.books = [...this.books].sort(byRating);
  }

  removeBookFromList(isbn: string) {
    this.books = this.books.filter(b => b.isbn !== isbn);
  }

  updateBook(book: Book) {
    this._subscription =
      this._booksShelf
        .update(book)
        .subscribe(
          () => {},
          err => this.errorMessage = err.message
        );
  }
}
