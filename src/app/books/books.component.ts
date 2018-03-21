import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { BookShelfHttp } from './lib/book-shelf.http.service';
import { byRating } from './lib/by-rating';
import { Book } from './models/book';

@Component({
  selector: 'tr-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  query: string;
  books: Book[];

  constructor(private _booksShelf: BookShelfHttp) {}

  ngOnInit(): void {
    this._booksShelf
      .all()
      .pipe(map(books => this.sort(books)))
      .subscribe(books => (this.books = books));
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
    console.log(book);
    this._booksShelf.update(book).subscribe();
  }
}
