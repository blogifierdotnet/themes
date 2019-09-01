import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService, ICategoryItem, IBlogPost } from '../core/blog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	posts: IBlogPost[];
	categories: ICategoryItem[];
  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

	ngOnInit() {
    this.blogService.getRecent().subscribe(
      result => { this.posts = result.posts; }
		);
		this.blogService.getCategories().subscribe(
      result => { this.categories = result; }
    );
  }
}