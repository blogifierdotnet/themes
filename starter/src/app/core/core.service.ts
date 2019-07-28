import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { IPostList, IPostModel, IBlogSettings } from './core.models';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getPosts(): Observable<IPostList> {
    var postsUrl = environment.apiEndpoint + '/api/posts?page=1';
    var searchUrl = environment.apiEndpoint + '/api/posts/search/';
    
    var page = this.route.snapshot.queryParamMap.get('page');
    var author = this.route.snapshot.queryParamMap.get('author');
    var category = this.route.snapshot.queryParamMap.get('category');
    var term = this.route.snapshot.queryParamMap.get('term');

    if (page) {
      postsUrl = environment.apiEndpoint + '/api/posts?page=' + page;
    }

    if (author) {
      postsUrl += '&author=' + author;
    }

    if(category) {
      postsUrl += '&category=' + category;
    }

    if (term) {
      return this.http.get<IPostList>(searchUrl + term).pipe(
        tap(data => console.log('Search: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }
    else {
      return this.http.get<IPostList>(postsUrl).pipe(
        tap(data => console.log('Posts: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }
  }

  getPost(slug: string): Observable<IPostModel>{
    var url = environment.apiEndpoint + '/api/posts/byslug/' + slug;
    return this.http.get<IPostModel>(url).pipe(
      tap(data => console.log('Blog post: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getSettings(): Observable<IBlogSettings> {
    var url = environment.apiEndpoint + '/api/settings';
    return this.http.get<IBlogSettings>(url).pipe(
      tap(data => console.log('Settings: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}