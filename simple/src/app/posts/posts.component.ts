import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { BlogService, IBlogSettings, IPostModel } from '../core/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
  public blogSettings: IBlogSettings;
  public postModel: IPostModel;
  public postCover: string;
  public avatarImg: string;
  errorMessage = '';

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogService.getSettings().subscribe(
      result => { 
        this.blogSettings = result;
      },
      error => this.errorMessage = <any>error
    );

    var slug = this.route.snapshot.paramMap.get('slug');
    if(slug){
      this.blogService.getPost(slug).subscribe(
        result => { 
          this.postModel = result;
          this.postCover = environment.apiEndpoint + '/' + this.postModel.post.cover;
          this.avatarImg = environment.apiEndpoint + '/' + this.postModel.post.author.avatar;
        },
        error => this.errorMessage = <any>error
      );
    }
  }

  toDate(date): string {
    var monthNames = ["January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"];
    var d = new Date(date); 
    return monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }
}