import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BlogService, IBlogSettings, IBlogPost, ICategoryItem } from './core/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(private blogService: BlogService, private titleService: Title) { }
	
	posts: IBlogPost[];
	categories: ICategoryItem[];
	settings: IBlogSettings;
	dt : Date = new Date();

  ngOnInit() {
    this.blogService.getSettings().subscribe(
      result => {
				this.settings = result;
        this.titleService.setTitle(result.title);
      }
		);
		this.blogService.getRecent().subscribe(
      result => { this.posts = result.posts; }
		);
		this.blogService.getCategories().subscribe(
      result => { this.categories = result; }
    );
  }
}