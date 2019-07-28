import { Component, OnInit } from '@angular/core';
import { BlogService } from '../core/core.service';
import { IBlogSettings, IPostList } from '../core/core.models';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blogSettings: IBlogSettings;
  public postList: IPostList;
  public blogCover: string;
  public blogLogo: string;
  public apiRoot: string;
  errorMessage = '';

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