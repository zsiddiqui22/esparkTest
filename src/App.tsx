import React,{createContext,useContext, useState,useEffect} from 'react';
import {BrowserRouter,Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Todos from './pages/Todos';
import Header from './components/Header';
import axios from 'axios';
import {TodoContextType, ITodo} from './types/todo.types';
export const AuthContext = createContext<TodoContextType | any>(null);

const App = () => {
 
  const [user, setUser] = useState<any>({
      username: 'Zohaib', //
      userpass: '123456',//
      login: false,
      token: null
  });

  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      title: 'Todo 1',
      description: 'This is a description',
      status: false,
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'This is a description',
      status: true,
    },
    {
      id: 3,
      title: 'Todo 3',
      description: 'This is a description',
      status: true,
    },
  ]);

  

  const handlerLogin = async (formData:{username:string,userpass:string})=>{
    console.log(user);

    await setUser((item:{})=>{
      return{
        ...item,
        username: formData?.username, //Zohaib
        userpass:formData?.userpass,
        login: true
      }
    });

    // try{
    //   const headers = {
    //     "Accept": "application/json",
    //     "Content-Type": "application/json"
    //   }
    //   const LOGIN_URL = 'http://localhost:4000/login';
    //   const response = await axios.post(LOGIN_URL,
    //     JSON.stringify({
    //       username: "Zohaib",
    //       password: "123456",
    //     }),
    //     {
    //       headers: {"Content-Type": "application/json"},
    //       withCredentials: true,
    //     }
    //   );
    //     console.log('response ', response)
       
    // } catch (err){
    //   console.log('Error on Authentication',err);
    // }
    

  }

  const handlerLogout = ()=>{
     setUser((item:{})=>{
      return{
        ...item,
        login: false
      }
    });
  }

  const updateTodo =(id:number)=>{
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
        setTodos([...todos])
      }
    });
  }

  const deleteTodo = (id:number)=>{
    let update = todos.filter((todo: ITodo) => { return todo.id !== id});
    setTodos([...update]);
  }

  const addTodo = (todoTitle:string, todoDescription: string)=>{
    setTodos((todo:ITodo[]) => { 
      return [...todo, 
      {
        id: Number(todo.length + 1),
        title: todoTitle,
        description: todoDescription,
        status: false,
      }
      ] 
    });
  }


  return (
    <AuthContext.Provider value={{user, todos, updateTodo, deleteTodo , addTodo, handlerLogin,handlerLogout}}>
        <BrowserRouter>
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/todos" element={<Todos />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
        </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;


export const useAuth = () =>{
  return useContext(AuthContext)
}