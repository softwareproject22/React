import { useState } from 'react';
import '../../App.css'
import './Login.css'
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate=useNavigate();
    const [id, setId]=useState('');
    const [pwd, setPwd]=useState('');

    const handleSubmit=()=>{
        navigate(`/User`);
    }

    return(
        <div className='flex'>
            <div className='grid'>
            <div className="logo_big">
                <span>Issue Management</span>&nbsp;System
            </div>
            <form className='login' onSubmit={handleSubmit}>
                <input type='text' value={id} placeholder='Username or UserId' required onChange={event => setId(event.currentTarget.value)}></input>
                <input type='password' value={pwd} placeholder='Password' required onChange={event => setPwd(event.currentTarget.value)}></input>
                <div>비밀번호를 잊으셨나요?</div>
                <input type='submit' value="Log in" ></input>
            </form>
            </div>
        </div>
    );
}

export default Login