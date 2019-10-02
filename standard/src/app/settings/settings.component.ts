import { Component, OnInit } from '@angular/core';
import { BlogService, IBlogSettings } from '../core/blog.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

	constructor(private blogService: BlogService) { }

	root: string;
	settings: IBlogSettings;
	
	txtName: string;

	onSubmit() {
		console.log('Settings submit');

		if (this.txtName) {
			alert('txtName : ' + this.txtName);
		}
	}

  ngOnInit() {
		this.root = environment.apiEndpoint;
    this.blogService.getSettings().subscribe(
      result => { this.settings = result; }
    );
  }
}