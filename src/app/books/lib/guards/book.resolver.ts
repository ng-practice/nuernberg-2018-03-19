import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Book } from '../../models/book';
import { BookShelfHttp } from '../book-shelf.http.service';

@Injectable()
export class BookResolver implements Resolve<Book> {
  constructor(private _bookShelf: BookShelfHttp) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Book> {
    const isbn = route.paramMap.get('isbn');
    return this._bookShelf.single(isbn);
  }
}
