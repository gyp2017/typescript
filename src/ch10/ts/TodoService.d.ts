interface Todo {
    id: number;
    name: string;
    state: TodoState;
}
declare enum TodoState {
    Active = 0,
    Complete = 1,
}
interface ITodoService {
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
}
declare class TodoService implements ITodoService {
    private static _lastId;
    private static generateTodoId();
    private static clone<T>(src);
    private todos;
    constructor(todos: string[]);
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearCompleted(): void;
    getAll(): any[];
    getById(todoId: any): any;
    toggle(todoId: any): void;
    private _find(todoId);
}
