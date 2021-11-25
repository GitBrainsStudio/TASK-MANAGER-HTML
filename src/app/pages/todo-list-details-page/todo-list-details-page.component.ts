import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoListDetailsPageService } from 'src/app/features/todo-list/services/todo-list-details-page.service';
import { OpacityAnimation } from 'src/app/shared/animations/opacity-animation';

@Component({
  selector: 'app-todo-list-details-page',
  templateUrl: './todo-list-details-page.component.html',
  styleUrls: ['./todo-list-details-page.component.scss'],
  providers: [TodoListDetailsPageService],
  animations: [ OpacityAnimation ]
})
export class TodoListDetailsPageComponent implements OnInit {

  constructor(
    public todoListDetailsPageService:TodoListDetailsPageService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.todoListDetailsPageService.getTodoListById(this.activatedRoute.snapshot.params['id'])
  }

}
