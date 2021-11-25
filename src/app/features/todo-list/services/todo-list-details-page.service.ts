import { Injectable, OnDestroy } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { ReplaySubject, takeUntil } from "rxjs";
import { TodoList } from "../models/todo-list.model";
import { TodoListDataService } from "./todo-list-data.service";

@Injectable()
export class TodoListDetailsPageService implements OnDestroy
{
    constructor(
        private todoListDataService:TodoListDataService,
        private router:Router,
        private snackBar:MatSnackBar
    ){ }

    todoList:TodoList | undefined

    getTodoListById(id:string)
    {
        if (!id)
            this.router.navigate(['/'])
        else
            this.todoListDataService.geById(id)
                .pipe(takeUntil(this.destroy))
                .subscribe((todoList:TodoList | undefined) => 
                {
                    this.todoList = todoList
                },
                error => 
                {
                    this.router.navigate(['/'])
                })
    }

    updateTodoList(todoList:TodoList)
    {
        this.todoListDataService.update(todoList)
            .pipe(takeUntil(this.destroy))
            .subscribe(response => 
                {
                    this.snackBar.open(
                        'TodoList updated successfully',
                        undefined,
                        {
                            duration: 2000
                        }
                    )
                },
                error => 
                {
                    this.snackBar.open(
                        'TodoList not updated',
                        undefined,
                        {
                            duration: 2000
                        }
                    )
                })
    }

    destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
    ngOnDestroy() {
        this.destroy.next(null);
        this.destroy.complete();
      }
}