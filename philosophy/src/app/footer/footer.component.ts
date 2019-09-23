import { Component, OnInit } from '@angular/core';
import { BlogService, IPostList, ICategoryItem } from '../core/blog.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private blogService: BlogService) { }
	
	categories: ICategoryItem[];

  ngOnInit() {
		this.blogService.getCategories().subscribe(
      result => { this.categories = result; }
    );
  }
}