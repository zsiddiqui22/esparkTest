import React, {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../types/todo.types';
import Todo from '../components/Todo';
import { useAuth } from '../App';
import navigator from '../services/navigate';

const Todos = () => {
    navigator();
    const auth = useAuth();
    const navigate = useNavigate();
    //const { todos, updateTodo } = React.useContext(AuthContext) as any;//TodoContextType
    
    useEffect(()=>{
      if(!auth.user.login){
        navigate('/');
      }
    },[])

    const [formTodo,setFormTodo] = useState({
      nameTodo: '',
      descriptionTodo: ''
    });

    const handlerChangeTodo = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setFormTodo({...formTodo, 
          [e.target.name] : e.target.value
      })
    }

    const handlerAddTodo = ()=>{
      auth.addTodo(formTodo?.nameTodo, formTodo?.descriptionTodo);
      setFormTodo({nameTodo: '', descriptionTodo: ''});
    }

    const checkFormData = () => {
      return (formTodo.nameTodo == '' || formTodo.descriptionTodo == '') ? true : false;
    }
    
    return (
      <div className="container">
        {auth.user.login && <>
        
        <div className="add-todo">
          <div className="form-group">
            <label htmlFor="nameTodo">Name</label>
            <input name="nameTodo" id="nameTodo" value={formTodo.nameTodo} onChange={handlerChangeTodo} placeholder="Name" required/>
          </div>

          <div className="form-group">
            <label htmlFor="descriptionTodo">Description</label>
            <input name="descriptionTodo" id="descriptionTodo" value={formTodo.descriptionTodo} onChange={handlerChangeTodo} placeholder="Description" required/>
          </div>

          <button onClick={handlerAddTodo} disabled={checkFormData()}>Add Todo</button>
        </div>
        
        {auth.todos.map((todo: ITodo) => (
          <Todo key={todo.id} 
            updateTodo={auth.updateTodo} 
            deleteTodo={auth.deleteTodo}
            todo={todo} />
        ))}
        
        </>
        }
      </div>
    );
}

export default Todos