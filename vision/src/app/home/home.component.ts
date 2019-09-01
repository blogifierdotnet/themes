import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService, IPostList, IBlogSettings } from '../core/blog.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	constructor(private blogService: BlogService) { }

  postList: IPostList;
	blogSettings: IBlogSettings;
	root: string;
  
  ngOnInit() {
		this.root = environment.apiEndpoint;

    this.blogService.getPosts().subscribe(
      result => { this.postList = result; }
    );
    this.blogService.getSettings().subscribe(
			result => { 
				this.blogSettings = result; 
			}
		);
		
	}
	
	onSubmit(f: NgForm) {
		if (f.value && f.value.txtEmail && !f.invalid) {
			this.blogService.subscribe(f.value.txtEmail).subscribe(
				() => {
					alert(f.value.txtEmail + ' added to the list. Thank you!');
				}
			);
		}
	}
}