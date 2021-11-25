import { Component, OnInit } from '@angular/core';
import { TodoListAllPageService } from 'src/app/features/todo-list/services/todo-list-all-page.service';
import { OpacityAnimation } from 'src/app/shared/animations/opacity-animation';

@Component({
  selector: 'app-todo-list-all-page',
  templateUrl: './todo-list-all-page.component.html',
  styleUrls: ['./todo-list-all-page.component.scss'],
  providers: [TodoListAllPageService],
  animations: [ OpacityAnimation ]
})
export class TodoListAllPageComponent implements OnInit {

  constructor(
    public todoListAllPageService:TodoListAllPageService
  ) { }

  ngOnInit(): void {
    this.todoListAllPageService.getTodoLists()
  }

}
