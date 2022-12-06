import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ExerciseComponent implements OnInit {
  constructor(private retriveData: DataService) {}
  posts: Post[] = [];

  ngOnInit() {
    this.posts = this.retriveData.getPosts();
  }
}
