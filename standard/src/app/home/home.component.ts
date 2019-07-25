import { Component, OnInit } from '@angular/core';
import { BlogService } from '../core/blog.service';
import { IBlogSettings } from '../core/blog.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
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