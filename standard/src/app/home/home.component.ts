import { Component, OnInit } from '@angular/core';
import { BlogService, IBlogSettings, IPostList } from '../core/blog.service';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	public blogSettings: IBlogSettings;
	public postList: IPostList;
	public blogCover: string;
	public apiRoot: string;
	errorMessage = '';
	public emailModel: string;

	constructor(private blogService: BlogService) { }

	ngOnInit(): void {
		this.emailModel = '';
		this.apiRoot = environment.apiEndpoint + '/';
		this.blogService.getSettings().subscribe(
			result => {
				this.blogSettings = result;
				this.blogCover = environment.apiEndpoint + '/' + this.blogSettings.cover;
			},
			error => this.errorMessage = <any>error
		);
		this.blogService.getPosts().subscribe(
			result => { this.postList = result; },
			error => this.errorMessage = <any>error
		);
	}

	onSubmit() {
		if (this.emailModel) {
			this.blogService.subscribe(this.emailModel).subscribe(
				() => {
					this.fadeOut( document.getElementById('frmNewsletter'), 300 );
					this.fadeIn( document.getElementById('ttlNewsletter'), 300 );
				}
			);
		}
	}

	fade(element) {
		var op = 1;  // initial opacity
		var timer = setInterval(function () {
			if (op <= 0.1) {
				clearInterval(timer);
				element.style.display = 'none';
			}
			element.style.opacity = op;
			element.style.filter = 'alpha(opacity=' + op * 100 + ")";
			op -= op * 0.1;
		}, 50);
	}

	toDate(date): string {
		var monthNames = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"];
		var d = new Date(date);
		return monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
	}

	fadeIn(elem, ms) {
		if (!elem)
			return;

		elem.style.opacity = 0;
		elem.style.filter = "alpha(opacity=0)";
		elem.style.display = "inline-block";
		elem.style.visibility = "visible";

		if (ms) {
			var opacity = 0;
			var timer = setInterval(function () {
				opacity += 50 / ms;
				if (opacity >= 1) {
					clearInterval(timer);
					opacity = 1;
				}
				elem.style.opacity = opacity;
				elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
			}, 50);
		}
		else {
			elem.style.opacity = 1;
			elem.style.filter = "alpha(opacity=1)";
		}
	}

	fadeOut(elem, ms) {
		if (!elem)
			return;

		if (ms) {
			var opacity = 1;
			var timer = setInterval(function () {
				opacity -= 50 / ms;
				if (opacity <= 0) {
					clearInterval(timer);
					opacity = 0;
					elem.style.display = "none";
					elem.style.visibility = "hidden";
				}
				elem.style.opacity = opacity;
				elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
			}, 50);
		}
		else {
			elem.style.opacity = 0;
			elem.style.filter = "alpha(opacity=0)";
			elem.style.display = "none";
			elem.style.visibility = "hidden";
		}
	}

}