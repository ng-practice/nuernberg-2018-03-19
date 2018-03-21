import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { UtilitiesModule } from '../utilities/utilities.module';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BooksComponent } from './books.component';
import { BooksShelf } from './lib/books-shelf.service';
import { IsbnPipe } from './pipes/isbn.pipe';
import { SearchByTitlePipe } from './pipes/search-by-title.pipe';
import { BookShelfHttp } from './lib/book-shelf.http.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, UtilitiesModule],
  declarations: [
    BookGridElementComponent,
    BooksComponent,
    IsbnPipe,
    SearchByTitlePipe
  ],
  exports: [BooksComponent],
  providers: [BookShelfHttp]
})
export class BooksModule {}
