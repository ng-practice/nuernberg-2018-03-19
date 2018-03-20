import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Book } from './books/models/book';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ng-Worshop seed';

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

  sort(book?: Book) {
    this.books.sort((current, next) => next.rating - current.rating);
  }

  removeBookFromList(isbn: string) {
    this.books = this.books.filter(b => b.isbn !== isbn);
  }
}
