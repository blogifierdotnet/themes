import { Component, OnInit } from '@angular/core';
import { formatDate } from '../../app.component';
import { BlogService } from '../data/blog.service';
import { IPostList } from '../data/post-list';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'post-list',
    templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
    public vm: IPostList;
    public term: string;
    errorMessage = '';

    constructor(private route: ActivatedRoute, private blogService: BlogService) {
        this.term = this.route.snapshot.paramMap.get('term');
     }

    getPost(id) {
        window.location.href = 'posts/' + id;
    }

    toDate(date) {
        return formatDate(date);
    }

    ngOnInit(): void {
        if(this.term && this.term.length > 0){
            this.blogService.searchPosts(this.term).subscribe(
                result => { this.vm = result; },
                error => this.errorMessage = <any>error
            );
        }
        else{
            this.blogService.getPosts().subscribe(
                result => { this.vm = result; },
                error => this.errorMessage = <any>error
            );
        }
    }
}