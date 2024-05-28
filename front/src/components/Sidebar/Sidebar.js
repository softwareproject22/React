import { useNavigate } from 'react-router-dom'
import './Sidebar.css'

const Sidebar=()=>{
    const navigate=useNavigate();

    const addProject=()=>{
        navigate('/Admin/admin/')
    }

    const addAccount=()=>{
        navigate('/Admin/admin/addaccount')
    }

    return(
        <menu className="bar">
            <nav>
                <ul>
                    <li onClick={addProject}>프로젝트 추가</li>
                    <li onClick={addAccount}>계정 추가</li>
                </ul>
            </nav>
        </menu>
    );
}

export default Sidebar