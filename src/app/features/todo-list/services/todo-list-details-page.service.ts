import { Injectable } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { Router } from "@angular/router";
import { TodoListNewFormComponent } from "../components/todo-list-new-form/todo-list-new-form.component";
import { TodoList } from "../models/todo-list.model";
import { TodoListDataService } from "./todo-list-data.service";

@Injectable()
export class TodoListDetailsPageService
{
    constructor(
        private todoListDataService:TodoListDataService,
        private bottomSheet: MatBottomSheet,
        private router:Router
    )
    {
        
    }

    todoList:TodoList | undefined

    getTodoListById(id:string)
    {
        if (!id)
            this.router.navigate(['/'])
        else
            this.todoListDataService.geById(id)
                .subscribe((todoList:TodoList | undefined) => 
                {
                    this.todoList = todoList
                },
                error => 
                {
                    this.router.navigate(['/'])
                })
    }
}