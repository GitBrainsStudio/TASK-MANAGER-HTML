import { Task } from "./task.model";

export class TodoList
{
    public Id:string;
    public Name:string;
    public Tasks:Task[];

    constructor(
        id:string,
        name:string,
        tasks:Task[]
    )
    {
        this.Id = id;
        this.Name = name;
        this.Tasks = tasks;
    }
}