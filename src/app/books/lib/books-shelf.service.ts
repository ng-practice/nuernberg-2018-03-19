import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay, map } from 'rxjs/operators';

import { Book } from '../models/book';

@Injectable()
export class BooksShelf {
  all(): Observable<Book[]> {
    return of([
      new Book(
        '1010120201',
        'Angular 6',
        'Das schnellste Angular aller Zeiten.',
        ['Misko Hevery', 'Igor Minar'],
        45,
        '',
        2,
        new Date(),
        ''
      ),
      new Book(
        '1010120202',
        'VueJs',
        'Awesome',
        ['Evan You'],
        35,
        '',
        1,
        new Date(),
        ''
      ),
      new Book(
        '1010120203',
        'Aurelia',
        'Also Awesome',
        ['Rob Eisenberg'],
        64,
        '',
        5,
        new Date(),
        ''
      )
    ]).pipe(delay(2000));
  }
}
