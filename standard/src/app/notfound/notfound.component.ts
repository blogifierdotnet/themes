import { Component, OnInit } from '@angular/core';
import { BlogService, IBlogSettings } from '../core/blog.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

	constructor(private blogService: BlogService) { }

	root: string;
	settings: IBlogSettings;

  ngOnInit() {
		this.root = environment.apiEndpoint;
    this.blogService.getSettings().subscribe(
      result => { this.settings = result; }
    );
  }
}