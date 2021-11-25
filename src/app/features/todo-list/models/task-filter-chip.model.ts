export class TaskFilterChip
{
    public Selected: boolean
    public Text: string;

    constructor(
        selected:boolean,
        text:string
    )
    {
        this.Selected = selected
        this.Text = text
    }

    select()
    {
        this.Selected = true;
    }

    reject()
    {
        this.Selected = false;
    }
}