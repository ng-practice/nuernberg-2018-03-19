import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BooksComponent } from './books.component';
import { IsbnPipe } from './pipes/isbn.pipe';
import { SearchByTitlePipe } from './pipes/search-by-title.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookGridElementComponent, BooksComponent, IsbnPipe, SearchByTitlePipe],
  exports: [BooksComponent]
})
export class BooksModule { }
