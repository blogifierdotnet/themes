import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { IPostList, IBlogSettings } from './blog.models';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    public postList: IPostList;
    public blogSettings: IBlogSettings;
    public settingsUrl: string;
    public searchUrl: string;

    constructor(private http: HttpClient, private route: ActivatedRoute) {
        this.searchUrl = environment.apiEndpoint + '/posts/search/';
        this.settingsUrl = environment.apiEndpoint + '/settings';
    }

    getPosts(): Observable<IPostList> {

        var url = environment.apiEndpoint + '/posts?page=1';
        var page = this.route.snapshot.queryParamMap.get('page');
        var author = this.route.snapshot.queryParamMap.get('author');

        if(page){
          url = environment.apiEndpoint + '/posts?page=' + page;
        }

        if(author){
          url += '&author=' + author;
        }

        return this.http.get<IPostList>(url).pipe(
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