export type Subtask = {
    title: string
    completed: boolean
}

export type ToDo = {
    title: string
    subtasks: Subtask[]
    status: 'todo' | 'doing' | 'done'
}

export type Column = {
    [key: string]: ToDo[]
}

export type Board = {
    title: string
    items: ToDo[]
}
