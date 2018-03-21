import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Book } from '../models/book';

@Component({
  selector: 'tr-book-grid-element',
  templateUrl: './book-grid-element.component.html',
  styleUrls: ['./book-grid-element.component.scss']
})
export class BookGridElementComponent {
  // <tr-book-grid-element [data]=""></tr-book-grid-element>
  @Input() data: Book;
  // <tr-book-grid-element (rate)=""></tr-book-grid-element>
  @Output() rate = new EventEmitter();
  // <tr-book-grid-element (remove)=""></tr-book-grid-element>
  @Output() remove = new EventEmitter<string>();
  // <tr-book-grid-element (update)=""></tr-book-grid-element>
  @Output() update = new EventEmitter<Book>();

  constructor() { }

  voteUp() {
    this.data.rating++;
    this.rate.emit();
    this.update.emit(this.data);
  }

  voteDown() {
    this.data.rating--;
    this.rate.emit();
    this.update.emit(this.data);
  }

  emitRemove() {
    this.remove.emit(this.data.isbn);
  }
}
