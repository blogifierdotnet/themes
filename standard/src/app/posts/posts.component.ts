import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../core/blog.service';
import { IBlogSettings, IBlogPost } from '../core/blog.models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
  public blogSettings: IBlogSettings;
  public blogPost: IBlogPost;
  errorMessage = '';

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogService.getSettings().subscribe(
      result => { this.blogSettings = result; },
      error => this.errorMessage = <any>error
    );

    var slug = this.route.snapshot.paramMap.get('slug');
    if(slug){
      this.blogService.getPost(slug).subscribe(
        result => { this.blogPost = result; },
        error => this.errorMessage = <any>error
      );
    }
  }
}