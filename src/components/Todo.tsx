import * as React from 'react';
import { ITodo } from '../types/todo.types';

type Props = {
  todo: ITodo;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : '';
  return (
    <div className={`card ${todo.status && 'completed'}`}>
      <div className="card--text">
        {}
        <h1 className={checkTodo}>{todo.title}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <div className="card--buttons">
        <button onClick={() => updateTodo(todo.id)} className={todo.status ? `hide-button` : 'card--button'}>
          {todo.status ? 'Undo' : 'Make Completed'}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="card--button">
          Delete
        </button>
      </div>
      
    </div>
  );
};
export default Todo;