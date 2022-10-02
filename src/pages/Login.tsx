import React, { useState, useContext } from 'react';
import { useAuth,AuthContext } from '../App';
import navigator from '../services/navigate';


const Login = () => {
    navigator();
    const auth = useAuth();
    

    const [form,setForm] = useState(auth.user);
    

    const handlerChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setForm({...form, 
            [e.target.name] : e.target.value
        })
    }

    const handlerLogin = () => {
        auth.handlerLogin(form);
        
    }
    
    
    return (
    <div>
        <section className="login-form">
            <h1>My Todo App</h1>
         {/* {form?.username} */}
                <div className="form-group">
                    <label htmlFor="uname">User Name</label>
                    <input className="form-control" type="text" value={form.username} name="username" id='username' onChange={handlerChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="upass">Password</label>
                    <input className="form-control" type="text" value={form.userpass} name="userpass" id='userpass' onChange={handlerChange}/>
                </div>
                <button onClick={handlerLogin}>Submit</button>
           
            
        </section>
    </div>
  )
}

export default Login