import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';

const navigator = ()=>{
    const navigate = useNavigate();
    const auth = useAuth();
    useEffect(()=>{
        auth.user.login ? navigate('/todos') : navigate('/login');
    },[auth.user]);
}

export default navigator;