import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { posts } from '../mock-data/posts.mock';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor() {}

  getPosts(): Post[] {
    return posts;
  }
}
