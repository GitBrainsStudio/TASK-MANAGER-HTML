import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { find, map, Observable, of } from "rxjs";
import { GuidGenerator } from "src/app/shared/helpers/guid-generator";
import { TM_API } from "src/environments/environment";
import { Task } from "../models/task.model";
import { TodoList } from "../models/todo-list.model";

@Injectable({providedIn:"root"})
export class TodoListDataService
{
    constructor(
        private httpClient:HttpClient,
        private guidGenerator:GuidGenerator)
    {
        this.fakeTodoListData
    }

    getAll() : Observable<TodoList[]>
    {
        return this.httpClient.get<TodoList[]>(TM_API + 'todo-lists')
            .pipe(map((todoLists:TodoList[]) => {
                return todoLists.map(todoList => 
                    {
                        return new TodoList(
                            todoList.Id,
                            todoList.Name,
                            todoList.Tasks
                        )
                    })
            } ))
    }

    geById(id:string) : Observable<TodoList | undefined>
    {
        return this.httpClient.get<TodoList>(TM_API + 'todo-lists/' + id)
            .pipe(map((todoList:TodoList) => 
            { 
                return new TodoList(
                    todoList.Id,
                    todoList.Name,
                    todoList.Tasks)
            }))
    }

    create(todoList:TodoList) : Observable<string>
    {
        return this.httpClient.post<string>(TM_API + 'todo-lists/', todoList)
    }

    update(todoList:TodoList) : Observable<string>
    {
        return this.httpClient.put<string>(TM_API + 'todo-lists/', todoList)
    }   

    private fakeTodoListData:TodoList[] = [
        {
            Id : this.guidGenerator.newGuid,
            Name: "Homeworks",
            Tasks: []
        },
        {
            Id : this.guidGenerator.newGuid,
            Name: "Shopping",
            Tasks: []
        },
        {
            Id : this.guidGenerator.newGuid,
            Name: "Others",
            Tasks: []
        }
    ];
    
}

