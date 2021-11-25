import { Injectable, OnDestroy } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { pipe, ReplaySubject, takeUntil } from "rxjs";
import { TodoListNewFormComponent } from "../components/todo-list-new-form/todo-list-new-form.component";
import { TodoList } from "../models/todo-list.model";
import { TodoListDataService } from "./todo-list-data.service";

@Injectable()
export class TodoListAllPageService implements OnDestroy
{
    constructor(
        private todoListDataService:TodoListDataService,
        private bottomSheet: MatBottomSheet,
        private router:Router,
        private snackBar:MatSnackBar
    )
    {
        
    }

    todoLists:TodoList[] | undefined

    getTodoLists()
    {
        this.todoListDataService.getAll()
            .pipe(takeUntil(this.destroy))
            .subscribe(todoLists => 
                {   
                    this.todoLists = todoLists
                },
                error => 
                {
                    this.snackBar.open(
                        'TodoLists were not loaded',
                        undefined,
                        {
                            duration: 2000
                        }
                    )
                })
    }

    openNewTodoListBottomSheet()
    {
        const bottomSheetRef = this.bottomSheet.open(TodoListNewFormComponent)

        bottomSheetRef.afterDismissed()
            .pipe(takeUntil(this.destroy))
            .subscribe((todoList:TodoList | undefined) => {
                if (todoList)
                {
                    this.todoListDataService.create(todoList)
                    .pipe(takeUntil(this.destroy))
                    .subscribe(id => { 
                        this.snackBar.open(
                            'TodoList created successfully',
                            undefined,
                            {
                                duration: 2000
                            }
                        )
                        this.router.navigate(['/todo-lists/' + id])
                    },
                    error => 
                    {
                        this.snackBar.open(
                            'TodoList not created',
                            undefined,
                            {
                                duration: 2000
                            }
                        )
                    }
                    )
                }
            })
    }

    getTodoListScore(todoList:TodoList) : string
    {
        let allTaskCount = todoList.Tasks.length;
        let completedTaskCount = todoList.Tasks
                                    .filter(task => task.Completed).length;

        return completedTaskCount + ' / ' + allTaskCount;
    }

    destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
    ngOnDestroy() {
        this.destroy.next(null);
        this.destroy.complete();
      }
}