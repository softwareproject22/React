import { useNavigate } from 'react-router-dom';
import './Header.css'

const AdminHeader=()=>{
    const navigate=useNavigate();

    const handleLogout=()=>{
        navigate('/')
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