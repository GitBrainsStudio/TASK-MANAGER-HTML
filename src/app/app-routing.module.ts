import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'todo-lists',
    loadChildren: () => import('./pages/todo-list-all-page/todo-list-all-page.module').then((m) => m.TodoListAllPageModule),
  },

  {
    path: 'todo-lists/:id',
    loadChildren: () => import('./pages/todo-list-details-page/todo-list-details-page.module').then((m) => m.TodoListDetailsPageModule),
  },
  {
    path: '**', redirectTo: 'todo-lists'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
