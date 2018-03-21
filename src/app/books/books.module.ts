import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UtilitiesModule } from '../utilities/utilities.module';
import { BookFormComponent } from './book-form/book-form.component';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books.routing';
import { BookShelfHttp } from './lib/book-shelf.http.service';
import { IsbnPipe } from './pipes/isbn.pipe';
import { SearchByTitlePipe } from './pipes/search-by-title.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    UtilitiesModule,

    BooksRoutingModule
  ],
  declarations: [
    BookGridElementComponent,
    BooksComponent,
    IsbnPipe,
    SearchByTitlePipe,
    BookFormComponent
  ],
  exports: [BooksComponent],
  providers: [BookShelfHttp]
})
export class BooksModule {}
