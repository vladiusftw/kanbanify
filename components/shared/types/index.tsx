export type ToDoColumn = 'todo' | 'doing' | 'done'

export type Subtask = {
    title: string
    completed: boolean
}

export type ToDo = {
    title: string
    desc: string
    subtasks: Subtask[]
    status: ToDoColumn
    id: number
}

export type Column = {
    [key: string]: ToDo[]
}

export type Board = {
    title: string
    items: ToDo[]
}
