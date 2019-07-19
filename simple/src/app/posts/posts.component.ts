import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent {
  public blogPost: BlogPost;
  public id: string;

  constructor(http: HttpClient, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');

    http.get<BlogPost>('http://localhost:63023/api/posts/' + this.id).subscribe(result => {
      this.blogPost = result;
    }, error => console.error(error));
  }
}

interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  published: string;
}