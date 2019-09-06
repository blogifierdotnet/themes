import { Component, OnInit } from '@angular/core';
import { BlogService, IPostList, IBlogSettings } from '../core/blog.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	model: IPostList;
	blogSettings: IBlogSettings;
	root: string;
	blogCover: string;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
		this.root = environment.apiEndpoint;

		this.blogService.getSettings().subscribe(
			result => {
				this.blogSettings = result;
				this.blogCover = environment.apiEndpoint + '/' + this.blogSettings.cover;
			}
		);

    this.blogService.getPosts().subscribe(
      result => { this.model = result; }
    );
  }
}