import { Component, OnInit } from '@angular/core';
import { BlogService, ICategoryItem } from '../../core/blog.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

	constructor(private blogService: BlogService) { }
	
	categories: ICategoryItem[];

  ngOnInit() {
		this.blogService.getCategories().subscribe(
      result => { this.categories = result; }
    );
  }
}