import { Component, OnInit } from '@angular/core';
import { BlogService, IBlogSettings, IPostList } from '../core/blog.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public blogSettings: IBlogSettings;
  public postList: IPostList;
  public blogCover: string;
  public apiRoot: string;
  errorMessage = '';

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.apiRoot = environment.apiEndpoint + '/';
    this.blogService.getSettings().subscribe(
      result => { 
        this.blogSettings = result;
        this.blogCover = environment.apiEndpoint + '/' + this.blogSettings.cover; 
      },
      error => this.errorMessage = <any>error
    );
    this.blogService.getPosts().subscribe(
      result => { this.postList = result; },
      error => this.errorMessage = <any>error
    );
  }

  toDate(date): string {
    var monthNames = ["January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"];
    var d = new Date(date); 
    return monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }
}