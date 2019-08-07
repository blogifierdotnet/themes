import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { IPostList, IPostModel, IBlogSettings, IAuthor } from './blog.models';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getPosts(): Observable<IPostList> {
    var postsUrl = environment.apiEndpoint + '/api/posts?include=FP&page=1';
    var searchUrl = environment.apiEndpoint + '/api/posts/search?include=FP';
    
    var page = this.route.snapshot.queryParamMap.get('page');
    var author = this.route.snapshot.queryParamMap.get('author');
    var category = this.route.snapshot.queryParamMap.get('category');
    var term = this.route.snapshot.queryParamMap.get('term');

    if (page) {
      postsUrl = environment.apiEndpoint + '/api/posts?include=FP&page=' + page;
    }

    if (author) {
      postsUrl += '&author=' + author;
    }

    if(category) {
      postsUrl += '&category=' + category;
    }

    if (term) {
      return this.http.get<IPostList>(searchUrl + term).pipe(
        tap(data => this.logMessage('Search: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }
    else {
      return this.http.get<IPostList>(postsUrl).pipe(
        tap(data => this.logMessage('Posts: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }
  }

  getPost(slug: string): Observable<IPostModel>{
    var url = environment.apiEndpoint + '/api/posts/byslug/' + slug;
    return this.http.get<IPostModel>(url).pipe(
      tap(data => this.logMessage('Blog post: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getSettings(): Observable<IBlogSettings> {
    var url = environment.apiEndpoint + '/api/settings';
    return this.http.get<IBlogSettings>(url).pipe(
      tap(data => this.logMessage('Settings: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getAuthors(): Observable<IAuthor> {
    var url = environment.apiEndpoint + '/api/authors';
    return this.http.get<IAuthor>(url).pipe(
      tap(data => this.logMessage('Authors: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  subscribe(txt: string): Observable<void> {
    var url = environment.apiEndpoint + '/api/notifications/subscribe';
    return this.http.put<void>(url, { }, { params: { email: txt } }).pipe(
      catchError(this.handleError)
    );
  }

  private logMessage(msg: string){
    if(!environment.production){
      console.log(msg);
    }
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