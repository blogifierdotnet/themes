import { Component, OnInit } from '@angular/core';
import { BlogService } from '../core/blog.service';
import { IBlogSettings, IPostList } from '../core/blog.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public blogSettings: IBlogSettings;
  public postList: IPostList;
  errorMessage = '';

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getSettings().subscribe(
      result => { this.blogSettings = result; },
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