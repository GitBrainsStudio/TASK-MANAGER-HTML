import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ReplaySubject, takeUntil } from 'rxjs';
import { OpacityAnimation } from 'src/app/shared/animations/opacity-animation';
import { TaskFilterChip } from '../../models/task-filter-chip.model';
import { Task } from '../../models/task.model';
import { TodoList } from '../../models/todo-list.model';
import { TodoListTaskNewFormComponent } from '../todo-list-task-new-form/todo-list-task-new-form.component';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.scss'],
  animations: [ OpacityAnimation ]
})
export class TodoListFormComponent implements OnInit, OnDestroy {

  constructor(
    private bottomSheet:MatBottomSheet,
  ) { }

  ngOnInit(): void {
    this.selectedTaskFilterChip.select()
  }

  @Input() todoList:TodoList | undefined
  @Output() todoListUpdated:EventEmitter<TodoList> = new EventEmitter<TodoList>();

  openTaskNewFormButtomSheet()
  {
    const bottomSheetRef = this.bottomSheet.open(TodoListTaskNewFormComponent)

        bottomSheetRef.afterDismissed()
            .pipe(takeUntil(this.destroy))
            .subscribe((task:Task | undefined) => {
                if (task)
                {
                  this.todoList?.Tasks.push(task)
                
                  if (this.todoList)
                    this.todoListUpdated.next(this.todoList);
                }
            })
  }

  taskStatusChanged(task:Task)
  {
    if (this.todoList)
      this.todoListUpdated.next(this.todoList);
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

  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  ngOnDestroy() {
      this.destroy.next(null);
      this.destroy.complete();
    }
}
