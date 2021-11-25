import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListAllPageRoutingModule } from './todo-list-all-page-routing.module';
import { LayoutModule } from 'src/app/features/layout/layout.module';
import { TodoListAllPageComponent } from './todo-list-all-page.component';
import { TodoListAllPageService } from 'src/app/features/todo-list/services/todo-list-all-page.service';
import { TodoListModule } from 'src/app/features/todo-list/todo-list.module';
import { MatCardModule } from '@angular/material/card';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TodoListAllPageComponent
  ],
  imports: [
    TodoListAllPageRoutingModule,
    CommonModule,
    LayoutModule,
    TodoListModule,
    MatCardModule,
    MatBottomSheetModule,
    MatButtonModule
  ]
})
export class TodoListAllPageModule { }
