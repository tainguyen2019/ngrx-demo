import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from 'src/app/ngrx/models/book.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  booksApiUrl = 'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{ items: Book[] }>(
        this.booksApiUrl
      )
      .pipe(map((books) => books.items || []));
  }
}