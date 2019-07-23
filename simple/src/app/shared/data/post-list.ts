import { IBlogPost } from './blog-post';
import { IPager } from './post-pager';

export interface IPostList {
    posts: IBlogPost[];
    pager: IPager;
}