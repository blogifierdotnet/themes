import { Component, OnInit } from '@angular/core';
import { BlogService } from '../core/blog.service';
import { IBlogSettings, IPostList } from '../core/blog.models';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public blogSettings: IBlogSettings;
  public postList: IPostList;
  public blogCover: string;
  public blogLogo: string;
  public apiRoot: string;
  errorMessage = '';

  model = {
    left: true,
    middle: false,
    right: false
  };
  focus;
  focus1;
  
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.apiRoot = environment.apiEndpoint + '/';
    this.blogService.getSettings().subscribe(
      result => { 
        this.blogSettings = result;
        this.blogCover = environment.apiEndpoint + '/' + this.blogSettings.cover;
        this.blogLogo = environment.apiEndpoint + '/' + this.blogSettings.logo;
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