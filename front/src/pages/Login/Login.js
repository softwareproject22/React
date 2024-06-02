import { useState } from 'react';
import '../../App.css'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { SearchUserById, userLogin } from '../../apis/user';
//import { useCookieContext } from '../../cookies';

function Login(){
    const navigate=useNavigate();
    const [id, setId]=useState('');
    const [pwd, setPwd]=useState('');
    //const {setUserCookie} = useCookieContext();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let data={
            id : id,
            pwd : pwd
        }
        setId("")
        setPwd("")
        const res=userLogin(data)
        res.then(promiseresult => {
            const data = promiseresult.data;
            console.log(data.message);
            if(data.message==='Login successful'){
                alert("로그인 성공하였습니다.")
                const res=SearchUserById(id);
                //console.log(res)
                res.then(promiseresult=>{
                    const data=promiseresult.data
                    //세션 스토리지에 데이터 저장
                    window.sessionStorage.setItem('id', data.loginId);
                    window.sessionStorage.setItem('role', data.role);
                    window.sessionStorage.setItem('nickname', data.nickname);
                })
                if(id==='admin'){
                    navigate('/Admin');
                }
                else{
                    navigate('/User')
                }
            }
            else{
                alert("아이디 혹은 비밀번호가 옳지 않습니다.")
            }
        });
    }

    return(
        <div className='flex'>
            <div className='grid'>
            <div className="logo_big">
                <span>Issue Management</span>&nbsp;System
            </div>
            <form className='login' onSubmit={handleSubmit}>
                <input type='text' value={id} placeholder='UserId' required onChange={event => setId(event.currentTarget.value)}></input>
                <input type='password' value={pwd} placeholder='Password' required onChange={event => setPwd(event.currentTarget.value)}></input>
                <div>비밀번호를 잊으셨나요?</div>
                <input type='submit' value="Log in" ></input>
            </form>
            </div>
        </div>
    );
}

export default Login