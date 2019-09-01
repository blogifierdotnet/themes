import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BlogService, IBlogSettings } from './core/blog.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private blogService: BlogService, private titleService: Title) { }
	settings: IBlogSettings;
	term: string;
	root: string;
	cover: string;
  ngOnInit() {
		this.root = environment.apiEndpoint;
    this.blogService.getSettings().subscribe(
      result => {
				this.titleService.setTitle(result.title);
				this.settings = result;
				this.cover = this.root + '/' + result.cover;
      }
    );
	}
	search() {
		if(this.term){
			window.location.href = '?term=' + this.term;
		}
	}
}