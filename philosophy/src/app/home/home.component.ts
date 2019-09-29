import { Component, OnInit } from '@angular/core';
import { BlogService, IPostList } from '../core/blog.service';
import { environment } from '../../environments/environment';
import { NgxMasonryOptions } from 'ngx-masonry';
import * as AOS from 'aos';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	model: IPostList;
	root: string;
	masonryOptions: NgxMasonryOptions;

	constructor(private blogService: BlogService) { }

	ngOnInit() {
		this.root = environment.apiEndpoint;
		this.blogService.getPosts().subscribe(
			result => { this.model = result; }
		);

		this.masonryOptions = {
			transitionDuration: '0.2s',
			gutter: 0,
			resize: true,
			initLayout: true,
			fitWidth: true,
			horizontalOrder: true
		};

		AOS.init();
	}
}