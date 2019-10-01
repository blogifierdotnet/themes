import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../core/blog.service';

@Component({
  selector: 'app-socialbuttons',
  templateUrl: './socialbuttons.component.html',
  styleUrls: ['./socialbuttons.component.css']
})
export class SocialbuttonsComponent implements OnInit {

	constructor(private blogService: BlogService) { }
	
	social: object;

  ngOnInit() {
		this.blogService.getThemeData().subscribe(
			result => { this.social = result.socialButtons; }
		);
  }
}