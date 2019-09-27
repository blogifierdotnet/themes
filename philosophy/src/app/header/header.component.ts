import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { BlogService, IBlogSettings } from '../core/blog.service';
import { HostListener} from "@angular/core";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(private blogService: BlogService) { }

	root: string;
	settings: IBlogSettings;
	scrollVisible: string;

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

	@HostListener("window:scroll", []) onWindowScroll() {
		var doc = document.documentElement;
		var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

		if (top >= 500){
			this.scrollVisible = 'link-is-visible';
		}
		else{
			this.scrollVisible = '';
		}
	}

	scrollToElement($element, e): void {
		e.preventDefault();
    e.stopPropagation();
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}