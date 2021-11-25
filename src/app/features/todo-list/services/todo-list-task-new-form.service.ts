import { Injectable } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { TodoListTaskNewFormComponent } from "../components/todo-list-task-new-form/todo-list-task-new-form.component";

@Injectable()
export class TodoListTaskNewFormService
{
    constructor(
        private bottomSheet: MatBottomSheet,
    )
    {
        
    }

    
}