export interface IBlogSettings {
  title: string,
  description: string,
  itemsPerPage: number,
  cover: string,
  logo: string,
  theme: string,
  culture: string
}

export interface IBlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  published: string;
  categories: string;
  slug: string;
  author: IAuthor;
  cover: string;
}

export interface IPager {
  currentPage: number;
  itemsPerPage: number;
  total: number;
  notFound: boolean;
  newer: number;
  showNewer: boolean;
  older: number;
  showOlder: boolean;
  linkToNewer: string;
  linkToOlder: string;
  routeValue: string;
  lastPage: number;
}

export interface IPostList {
  posts: IBlogPost[];
  pager: IPager;
}

export interface IPostModel {
  blog: IBlogSettings;
  post: IBlogPost;
  older: IBlogPost;
  newer: IBlogPost;
}

export interface IAuthor {
  id: number;
  appUserName: string;
  email: string;
  displayName: string;
  bio: string;
  avatar: string;
  isAdmin: boolean,
  created: string;
}