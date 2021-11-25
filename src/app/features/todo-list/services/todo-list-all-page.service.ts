import { Injectable } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { Router } from "@angular/router";
import { TodoListNewFormComponent } from "../components/todo-list-new-form/todo-list-new-form.component";
import { TodoList } from "../models/todo-list.model";
import { TodoListDataService } from "./todo-list-data.service";

@Injectable()
export class TodoListAllPageService
{
    constructor(
        private todoListDataService:TodoListDataService,
        private bottomSheet: MatBottomSheet,
        private router:Router
    )
    {
        
    }

    todoLists:TodoList[] | undefined

    getTodoLists()
    {
        this.todoListDataService.getAll()
            .subscribe(todoLists => 
                {   
                    this.todoLists = todoLists
                },
                error => 
                {
                    this.todoLists = []
                })
    }

    openNewTodoListBottomSheet()
    {
        const bottomSheetRef = this.bottomSheet.open(TodoListNewFormComponent)

        bottomSheetRef.afterDismissed()
            .subscribe((todoList:TodoList) => {

                this.todoListDataService.create(todoList)

                this.router.navigate(['/todo-lists/' + todoList.Id])
            })
    }
}