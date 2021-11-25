import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { GuidGenerator } from 'src/app/shared/helpers/guid-generator';
import { TodoList } from '../../models/todo-list.model';

@Component({
  selector: 'app-todo-list-new-form',
  templateUrl: './todo-list-new-form.component.html',
  styleUrls: ['./todo-list-new-form.component.scss']
})
export class TodoListNewFormComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private guidGenerator:GuidGenerator,
    private bottomsheet: MatBottomSheetRef<TodoListNewFormComponent>
  ) { }

  ngOnInit(): void {
    this.todoListNewForm = this.formBuilder.group({
      'Name': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
    })
  }

  create()
  {
    let todoList = new TodoList(
      this.guidGenerator.newGuid,
      this.todoListNewForm?.controls['Name'].value,
      []
    )

    this.bottomsheet.dismiss(todoList)
  }

  public todoListNewForm:FormGroup | undefined
}
