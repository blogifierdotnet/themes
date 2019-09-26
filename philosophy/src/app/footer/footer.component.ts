import { Component, OnInit } from '@angular/core';
import { BlogService, IPostList, ICategoryItem, IBlogSettings } from '../core/blog.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private blogService: BlogService) { }
	
	categories: ICategoryItem[];
	popular: IPostList;
	settings: IBlogSettings;
	root: string;

  ngOnInit() {
		this.root = environment.apiEndpoint;
		this.blogService.getCategories().subscribe(
      result => { this.categories = result; }
		);
		this.blogService.getPopular().subscribe(
      result => { this.popular = result; }
		);
		this.blogService.getSettings().subscribe(
      result => { this.settings = result;
      }
    );
  }
}