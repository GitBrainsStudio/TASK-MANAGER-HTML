import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { TaskFilterChip } from '../../models/task-filter-chip.model';
import { Task } from '../../models/task.model';
import { TodoList } from '../../models/todo-list.model';
import { TodoListTaskNewFormComponent } from '../todo-list-task-new-form/todo-list-task-new-form.component';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.scss']
})
export class TodoListFormComponent implements OnInit {

  constructor(
    private bottomSheet:MatBottomSheet
  ) { }

  ngOnInit(): void {
    this.selectedTaskFilterChip.select()
  }

  @Input() todoList:TodoList | undefined

  openTaskNewFormButtomSheet()
  {
    const bottomSheetRef = this.bottomSheet.open(TodoListTaskNewFormComponent)

        bottomSheetRef.afterDismissed()
            .subscribe((task:Task) => {
                this.todoList?.Tasks.push(task)
            })
  }

  chipSelected(selectedTaskFilterChip:TaskFilterChip)
  {
    this.selectedTaskFilterChip = selectedTaskFilterChip
    this.selectedTaskFilterChip.select();

    this.taskFilterChips.filter(chip => chip.Text != selectedTaskFilterChip.Text)
      .forEach(chip => chip.reject())
  }

  get todoListTasks() : Task[]
  {
    if (this.todoList)
    {
      if (this.selectedTaskFilterChip.Text == "Completed")
      {
        return this.todoList?.Tasks
                .filter(task => task.Completed)
      }

      if (this.selectedTaskFilterChip.Text == "Undone")
      {
        return this.todoList?.Tasks
                .filter(task => !task.Completed)
      }
      else return this.todoList?.Tasks    
    }
      
    else return []
  }

  taskFilterChips:TaskFilterChip[] = 
  [
    new TaskFilterChip(false, "All"),
    new TaskFilterChip(false, "Completed"),
    new TaskFilterChip(false, "Undone")
  ]
  
  selectedTaskFilterChip:TaskFilterChip = this.taskFilterChips[0]
}
