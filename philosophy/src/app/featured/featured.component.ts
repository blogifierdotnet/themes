import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { BlogService, IBlogPost } from '../core/blog.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  constructor(private blogService: BlogService) { }
	
	root: string;
	posts: IBlogPost[];

	f1: IBlogPost;
	f2: IBlogPost;
	f3: IBlogPost;

  ngOnInit() {
		this.root = environment.apiEndpoint;
		this.blogService.getFeatured().subscribe(
			result => { 
				this.posts = result.posts; 

				if(this.posts){ this.f1 = this.posts[0]; }
				if(this.posts && this.posts.length > 1){ this.f2 = this.posts[1]; }
				if(this.posts && this.posts.length > 2){ this.f3 = this.posts[2]; }
			}
		);
  }
}