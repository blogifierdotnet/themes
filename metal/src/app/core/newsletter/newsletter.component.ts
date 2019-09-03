import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService, IBlogSettings, IPostList } from '../blog.service';

@Component({
	selector: 'app-newsletter',
	templateUrl: './newsletter.component.html',
	styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
	email: string;
	constructor(private blogService: BlogService) { }

	ngOnInit() {
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