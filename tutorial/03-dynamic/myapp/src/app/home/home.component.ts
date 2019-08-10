import { Component, OnInit } from '@angular/core';
import { BlogService, IPostList } from '../core/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public postList: IPostList;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPosts().subscribe(
      result => { this.postList = result; }
    );
  }
}