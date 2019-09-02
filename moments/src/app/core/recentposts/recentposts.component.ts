import { Component, OnInit } from '@angular/core';
import { BlogService, IBlogPost } from '../../core/blog.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-recentposts',
  templateUrl: './recentposts.component.html',
  styleUrls: ['./recentposts.component.css']
})
export class RecentpostsComponent implements OnInit {

	constructor(private blogService: BlogService) { }
	
	posts: IBlogPost[];
	root: string;

  ngOnInit() {
		this.root = environment.apiEndpoint;
		this.blogService.getRecent().subscribe(
      result => { this.posts = result.posts; }
		);
  }
}