export class Task
{
    public Id:string;
    public Name:string;
    public Completed:boolean

    constructor(
        id:string,
        name:string,
        completed:boolean
    )
    {
        this.Id = id;
        this.Name = name;
        this.Completed = completed;
    }
    
}