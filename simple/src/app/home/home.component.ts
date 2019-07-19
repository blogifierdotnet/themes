import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public vm: VM;
  public author: string;

  constructor(http: HttpClient, private route: ActivatedRoute) {
    this.author = this.route.snapshot.queryParamMap.get('author');

    var url = 'http://localhost:63023/api/posts';

    if(this.author){
      url += '?author=' + this.author;
    }

    http.get<VM>(url).subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }

  getPost(id){
    window.location.href = 'posts/' + id;
  }

  postsByAuthor(id){   
    alert(id);
    return false;
  }

  toDate(date){
    return formatDate(date);
  }
}

interface VM {
  posts: BlogPost[];
}

interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  published: string;
}