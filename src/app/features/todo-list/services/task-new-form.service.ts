import { Injectable } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { TodoListTaskNewFormComponent } from "../components/todo-list-task-new-form/todo-list-task-new-form.component";

@Injectable()
export class TaskNewFormService
{
    constructor(
        private bottomSheet: MatBottomSheet,
    )
    {
        
    }

    openFormButtomSheet()
    {
        const bottomSheetRef = this.bottomSheet.open(TodoListTaskNewFormComponent)
    }
}