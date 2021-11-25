import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListFormComponent } from './components/todo-list-form/todo-list-form.component';
import { TodoListNewFormComponent } from './components/todo-list-new-form/todo-list-new-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodoListTaskNewFormComponent } from './components/todo-list-task-new-form/todo-list-task-new-form.component';
import { TodoListTaskNewFormService } from './services/todo-list-task-new-form.service';


@NgModule({
  declarations: [
    TodoListFormComponent,
    TodoListNewFormComponent,
    TodoListTaskNewFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  exports:[
    TodoListFormComponent,
    TodoListNewFormComponent,
    TodoListTaskNewFormComponent
  ],
  providers: [
    TodoListTaskNewFormService
  ]
})
export class TodoListModule { }
