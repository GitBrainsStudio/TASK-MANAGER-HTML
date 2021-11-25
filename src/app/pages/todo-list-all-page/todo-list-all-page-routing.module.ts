import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListAllPageComponent } from './todo-list-all-page.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    
  { 
      path: '', 
      component: TodoListAllPageComponent 
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TodoListAllPageRoutingModule { }
