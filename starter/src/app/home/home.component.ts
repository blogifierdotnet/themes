import { Component, OnInit } from '@angular/core';
import { BlogService, IPostList, IBlogSettings } from '../core/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postList: IPostList;
  blogSettings: IBlogSettings;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPosts().subscribe(
      result => { this.postList = result; }
    );
    this.blogService.getSettings().subscribe(
      result => { this.blogSettings = result; }
    );
  }
}