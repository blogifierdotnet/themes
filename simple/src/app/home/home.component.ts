import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/data/blog.service';
import { IBlogSettings } from '../shared/data/blog-settings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
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