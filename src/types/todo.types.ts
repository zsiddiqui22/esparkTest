export interface ITodo {
    id: number;
    title: string;
    description: string;
    status: boolean;
  }
export type TodoContextType = {
    user: any;
    todos: ITodo[];
    handlerLogin: (formData:{}) => void;
    handlerLogout: ()=> void;
    // saveTodo: (todo: ITodo) => void;
    // updateTodo: (id: number) => void;
};