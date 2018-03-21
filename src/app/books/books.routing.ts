import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { BookFormComponent } from './book-form/book-form.component';
import { BooksComponent } from './books.component';
import { BookResolver } from './lib/guards/book.resolver';

const routes: Route[] = [
  { path: '', component: BooksComponent, pathMatch: 'full' },
  {
    path: 'book/:isbn/edit',
    component: BookFormComponent,
    resolve: { book: BookResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [BookResolver]
})
export class BooksRoutingModule {}
