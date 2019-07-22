import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/data/blog.service';
import { IBlogSettings } from '../shared/data/blog-settings';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  public blogSettings: IBlogSettings;
  errorMessage = '';

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getSettings().subscribe(
      result => { this.blogSettings = result; },
      error => this.errorMessage = <any>error
    );
  }
}