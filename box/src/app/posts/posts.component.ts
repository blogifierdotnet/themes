import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService, IPostModel } from '../core/blog.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

	model: IPostModel;
	root: string;

  ngOnInit() {
		var slug = this.route.snapshot.paramMap.get('slug');
		this.root = environment.apiEndpoint;
    this.blogService.getPost(slug).subscribe(
      result => { 
        this.model = result;
      }
    );
  }
}