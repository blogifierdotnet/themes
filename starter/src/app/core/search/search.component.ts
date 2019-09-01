import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	constructor() { }
	
	term: string;

	ngOnInit() { }

	search() {
		window.location.href = '?term=' + this.term;
	}
}