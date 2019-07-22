import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { IPostList } from './post-list';
import { IBlogSettings } from './blog-settings';

@Injectable({
    providedIn: 'root',
})
export class BlogService {
    public postList: IPostList;
    public blogSettings: IBlogSettings;
    public author: string;
    public page: string;

    public postsUrl: string;
    public settingsUrl: string;
    public searchUrl: string;

    constructor(private http: HttpClient, private route: ActivatedRoute) {
        this.author = this.route.snapshot.queryParamMap.get('author');
        this.page = this.route.snapshot.queryParamMap.get('page');
        if(!this.page){ this.page = '1' }

        this.searchUrl = environment.apiEndpoint + '/posts/search/';

        this.postsUrl = environment.apiEndpoint + '/posts?page=' + this.page;
        this.settingsUrl = environment.apiEndpoint + '/settings';
    
        if(this.author){ this.postsUrl += '&author=' + this.author; }
    }

    getPosts(): Observable<IPostList> {
        return this.http.get<IPostList>(this.postsUrl).pipe(
          tap(data => console.log('Posts: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
    }

    getSettings(): Observable<IBlogSettings> {
        return this.http.get<IBlogSettings>(this.settingsUrl).pipe(
          tap(data => console.log('Settings: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
    }

    searchPosts(term: string): Observable<IPostList> {
        return this.http.get<IPostList>(this.searchUrl + term).pipe(
          tap(data => console.log('Search: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
    }
   
    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}