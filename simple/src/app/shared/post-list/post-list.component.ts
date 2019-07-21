import { Component, OnInit } from '@angular/core';
import { formatDate } from '../../app.component';
import { BlogService } from '../data/blog.service';
import { IPostList } from '../data/post-list';

@Component({
    selector: 'post-list',
    templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
    public vm: IPostList;
    errorMessage = '';

    constructor(private blogService: BlogService) { }

    getPost(id) {
        window.location.href = 'posts/' + id;
    }

    toDate(date) {
        return formatDate(date);
    }

    ngOnInit(): void {
        this.blogService.getPosts().subscribe(
            result => { this.vm = result; },
            error => this.errorMessage = <any>error
        );
    }
}