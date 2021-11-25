import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListDetailsPageRoutingModule } from './todo-list-details-page-routing.module';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from 'src/app/features/layout/layout.module';
import { TodoListModule } from 'src/app/features/todo-list/todo-list.module';
import { TodoListDetailsPageComponent } from './todo-list-details-page.component';
import { TodoListDetailsPageService } from 'src/app/features/todo-list/services/todo-list-details-page.service';



@NgModule({
  declarations: [
    TodoListDetailsPageComponent
  ],
  imports: [
    TodoListDetailsPageRoutingModule,
    CommonModule,
    LayoutModule,
    TodoListModule,
    MatCardModule,
    MatBottomSheetModule,
    MatButtonModule
  ],
  providers: [
    TodoListDetailsPageService
  ]
})
export class TodoListDetailsPageModule { }
