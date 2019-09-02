import { Component, OnInit } from '@angular/core';
import { BlogService, IPostList } from '../core/blog.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private blogService: BlogService) { }

	model: IPostList;
	root: string;

  ngOnInit() {
		this.root = environment.apiEndpoint;
    this.blogService.getPosts().subscribe(
      result => { this.model = result; }
    );
  }
}