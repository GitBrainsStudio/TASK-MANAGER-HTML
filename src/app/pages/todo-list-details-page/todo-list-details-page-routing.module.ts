import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoListDetailsPageComponent } from './todo-list-details-page.component';


const routes: Routes = [
    
  { 
      path: '', 
      component: TodoListDetailsPageComponent 
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TodoListDetailsPageRoutingModule { }
