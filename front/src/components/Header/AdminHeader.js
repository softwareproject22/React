import { useNavigate } from 'react-router-dom';
import './Header.css'
import { Logout } from '../../apis/user';

const AdminHeader=()=>{
    const navigate=useNavigate();

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
                navigate('/')
            }
            else{
                //alert("아이디 혹은 비밀번호가 옳지 않습니다.")
            }
        });
    }

    const gotoHome=()=>{
        navigate('/Admin/')
    }

    const gotoIssue=()=>{
        navigate('/Admin/issue')
    }

    const gotoStats=()=>{
        navigate('/Admin/stats')
    }

    const gotoView=()=>{
        navigate('/Admin/view')
    }

    const gotoAdmin=()=>{
        navigate('/Admin/admin')
    }

    return(
        <header className="header">
            <div className='contents'>
                <div className='logo'>
                    <span>Issue management</span>&nbsp;system
                </div>
                <nav className='menu'>
                    <ul>
                        admin로 로그인
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
                        <li onClick={gotoIssue}>
                            Issue
                        </li>
                        <li onClick={gotoStats}>
                            Stats
                        </li>
                        <li onClick={gotoAdmin}>
                            Admin
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default AdminHeader