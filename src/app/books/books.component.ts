import { Component, OnInit } from '@angular/core';
import { Book } from './models/book';

@Component({
  selector: 'tr-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  query: string;

  books = [
    new Book(
      '1010120201',
      'Angular 6',
      'Das schnellste Angular aller Zeiten.',
      ['Misko Hevery', 'Igor Minar'],
      45,
      7
    ),
    new Book(
      '1010120202',
      'VueJs',
      'Awesome',
      ['Evan You'],
      35,
      1
    ),
    new Book(
      '1010120203',
      'Aurelia',
      'Also Awesome',
      ['Rob Eisenberg'],
      64,
      5
    ),
  ];

  ngOnInit(): void {
    this.sort();
  }

  updateSearchQueary(event: KeyboardEvent) {
    this.query = (<HTMLInputElement>event.target).value;
  }

  sort(book?: Book) {
    this.books = [...this.books].sort((current, next) => next.rating - current.rating);
  }

  removeBookFromList(isbn: string) {
    this.books = this.books.filter(b => b.isbn !== isbn);
  }
}
