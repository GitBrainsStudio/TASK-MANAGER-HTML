import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { GuidGenerator } from 'src/app/shared/helpers/guid-generator';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-todo-list-task-new-form',
  templateUrl: './todo-list-task-new-form.component.html',
  styleUrls: ['./todo-list-task-new-form.component.scss']
})
export class TodoListTaskNewFormComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private guidGenerator:GuidGenerator,
    private bottomsheet: MatBottomSheetRef<TodoListTaskNewFormComponent>

  ) { }

  ngOnInit(): void {
    this.taskNewForm = this.formBuilder.group({
      'Name': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(80)]],
    })
  }

  create()
  {
    let task = new Task(
      this.guidGenerator.newGuid,
      this.taskNewForm?.controls['Name'].value,
      false
    )

    this.bottomsheet.dismiss(task)
  }

  public taskNewForm:FormGroup | undefined
}
