import { createReducer, on } from '@ngrx/store';
import { BooksApiActions } from '../actions/book.action';
import { Book } from '../models/book.model';

export const initialBooksState: ReadonlyArray<Book> = []

export const booksReducers = createReducer(initialBooksState,
    on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
)