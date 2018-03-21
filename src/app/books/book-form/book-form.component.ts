import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BookShelfHttp } from '../lib/book-shelf.http.service';
import { Book } from '../models/book';

@Component({
  selector: 'tr-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  editForm: FormGroup;
  authors: FormArray;
  book$: Book;

  constructor(
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _bookShelf: BookShelfHttp
  ) {
    this.authors = this._fb.array([]);
    this.editForm = this._fb.group({
      isbn: [{ value: '', disabled: true }, [Validators.required]],
      title: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(40)]
      ],
      subtitle: [''],
      description: ['', [Validators.required]],
      authors: this.authors
    });
  }

  ngOnInit() {
    this.book$ = this._route.snapshot.data.book;
    this._fillEditForm(this.book$);
  }

  private _fillEditForm(book: Book): void {
    Object.keys(this.editForm.controls)
      .map(key => ({ key, control: this.editForm.controls[key] }))
      .filter(formControl => formControl.control instanceof FormControl)
      .forEach(formControl =>
        formControl.control.setValue(book[formControl.key])
      );

    book.authors.forEach(author =>
      this.authors.push(this._fb.control(author, [Validators.required]))
    );
  }
}
