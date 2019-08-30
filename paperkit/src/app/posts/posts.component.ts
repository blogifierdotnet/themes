import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { BlogService, IBlogSettings, IPostModel, IContact } from '../core/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  focus: any;
  focus1: any;
  public blogSettings: IBlogSettings;
  public authors: object;
  public postModel: IPostModel;
  public postCover: string;
  public avatarImg: string;
  public webRoot: string;
	errorMessage = '';
	public contact: IContact;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
		this.webRoot = environment.apiEndpoint;
		this.contact = { name: "", email: "", content: "" };
    
    this.blogService.getSettings().subscribe(
      result => {
        this.blogSettings = result;
      },
      error => this.errorMessage = <any>error
    );

    this.blogService.getAuthors().subscribe(
      result => {
        this.authors = result;
      },
      error => this.errorMessage = <any>error
    );

    var slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
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
	
	onSubmit() {
		if (this.contact.name && this.contact.email && this.contact.content) {
			this.blogService.contact(this.contact).subscribe(
				() => {
					this.contact = { name: "", email: "", content: "" };
					alert('Thank you!');
				}
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