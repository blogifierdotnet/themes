import { Component, OnInit } from '@angular/core';
import { BlogService, IPostList, ICategoryItem, IBlogSettings } from '../core/blog.service';
import { environment } from '../../environments/environment';
import data from '../../assets/data.json'

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
	social: object;
	root: string;
	dt : Date = new Date();

  ngOnInit() {
		this.root = environment.apiEndpoint;
		this.social = data.socialButtons;
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