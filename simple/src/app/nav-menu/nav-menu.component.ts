import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostListComponent } from '../shared/post-list/post-list.component';

@Component({
  selector: 'app-nav-menu',
  providers:[PostListComponent ],
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(private postListComponent: PostListComponent) { }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  onSubmit(f: NgForm) {
    if(f.value && f.value.term){
      window.location.href = 'search/' + f.value.term;
    }
  }
}