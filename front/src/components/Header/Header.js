import './Header.css'
import '../../App.css'
import { useNavigate } from 'react-router-dom';
import { Logout } from '../../apis/user';
import { useEffect, useState } from 'react';
//import { useCookieContext } from '../../cookies';

const Header=(props)=>{
    const navigate=useNavigate();
    const nickname=window.sessionStorage.getItem('nickname')
    const role=window.sessionStorage.getItem('role')
    //const {removeUserCookie}=useCookieContext();

    const handleLogout=()=>{
        const res=Logout();
        res.then(promiseresult => {
            const data = promiseresult.data;
            console.log(data.message);
            if(data.message==='Logout successful'){
                alert("로그아웃합니다.")
                window.sessionStorage.removeItem('id')
                window.sessionStorage.removeItem('role')
                window.sessionStorage.removeItem('nickname')
                //removeUserCookie();
                navigate('/')
            }
            else{
                //alert("아이디 혹은 비밀번호가 옳지 않습니다.")
            }
        });
    }

    const gotoHome=()=>{
        navigate('/User/')
    }

    const gotoIssue=()=>{
        navigate('/User/issue')
    }

    const gotoStats=()=>{
        navigate('/User/stats')
    }

    const gotoView=()=>{
        navigate('/User/view')
    }

    return(
        <header className="header">
            <div className='contents'>
                <div className='logo'>
                    <span>Issue management</span>&nbsp;system
                </div>
                <nav className='menu'>
                    <ul>
                        {nickname?nickname:"User"}로 로그인
                        <span>|</span>
                        <li onClick={handleLogout}>
                            Logout
                        </li>
                        <li onClick={gotoHome}>
                            Home
                        </li>
                        <li onClick={gotoView}>
                            View
                        </li>
                        {   role==="TESTER"
                            ?
                            <li onClick={gotoIssue}>
                            Issue
                            </li>
                            :null
                        }
                        <li onClick={gotoStats}>
                            Stats
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header