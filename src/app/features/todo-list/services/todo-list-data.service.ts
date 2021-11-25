import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { find, map, Observable, of } from "rxjs";
import { GuidGenerator } from "src/app/shared/helpers/guid-generator";
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
        return of(this.fakeTodoListData)
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
        return of(this.fakeTodoListData.filter(item => item.Id == id)[0])
            .pipe(map((todoList:TodoList) => 
            { 
                return new TodoList(
                    todoList.Id,
                    todoList.Name,
                    todoList.Tasks)
            }))
    }

    create(todoList:TodoList) 
    {
        this.fakeTodoListData.push(todoList)
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

