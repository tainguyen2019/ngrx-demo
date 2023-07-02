import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { BooksActions, BooksApiActions } from './ngrx/actions/book.action';
import { selectBookCollection, selectBooks } from './ngrx/selectors/book.selector';
import { BooksService } from './services/book/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(private booksService: BooksService, private store: Store) { }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }
}