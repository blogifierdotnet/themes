import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService, IPostModel } from '../core/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

	model: IPostModel;

  ngOnInit() {
    var slug = this.route.snapshot.paramMap.get('slug');
    this.blogService.getPost(slug).subscribe(
      result => { 
        this.model = result;
      }
    );
  }
}