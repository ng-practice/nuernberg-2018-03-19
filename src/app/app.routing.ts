import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { CanLoadGuard } from './can-load.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/books', pathMatch: 'full' },
      {
        path: 'books',
        loadChildren: './books/books.module#BooksModule',
        canLoad: [CanLoadGuard]
      },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  exports: [RouterModule],
  providers: [CanLoadGuard]
})
export class AppRoutingModule {}
