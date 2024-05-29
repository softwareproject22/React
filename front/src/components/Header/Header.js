import './Header.css'
import '../../App.css'
import { useNavigate } from 'react-router-dom';

const Header=(props)=>{
    const navigate=useNavigate();

    const handleLogout=()=>{
        navigate('/')
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
                        user로 로그인
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
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header