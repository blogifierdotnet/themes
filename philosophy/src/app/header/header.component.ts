import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { BlogService, IBlogSettings } from '../core/blog.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(private blogService: BlogService) { }

	root: string;
	settings: IBlogSettings;

	ngOnInit() {
		this.root = environment.apiEndpoint;
    this.blogService.getSettings().subscribe(
      result => {
				this.settings = result;
      }
    );
  }

	onSearch(e) {
		e.preventDefault();
		e.stopPropagation();

		const body = document.getElementsByTagName('body')[0];
		body.classList.add('search-is-visible');

		setTimeout(function () {
			var txtField = <HTMLInputElement>document.getElementsByClassName('search-field')[0];
			txtField.value = '';
			txtField.focus();
		}, 100);
	}

	closeSearch(e) {
		e.preventDefault();
		e.stopPropagation();
		const body = document.getElementsByTagName('body')[0];
		body.classList.remove('search-is-visible');
	}

	onSubmit() {
		var txtField = <HTMLInputElement>document.getElementsByClassName('search-field')[0];
		var term = txtField.value;
		if (term && term.length > 0) {
			window.location.href = '?term=' + term;
		}
	}

}