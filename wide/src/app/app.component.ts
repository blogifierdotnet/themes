import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BlogService, IBlogSettings } from './core/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(private blogService: BlogService, private titleService: Title) { }
	
	settings: IBlogSettings;
	dt : Date = new Date();

  ngOnInit() {
    this.blogService.getSettings().subscribe(
      result => {
				this.settings = result;
        this.titleService.setTitle(result.title);
      }
    );
  }
}