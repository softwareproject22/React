import { useLocation, useNavigate } from 'react-router-dom'
import './Statsbar.css'

const Statsbar=()=>{
    const location=useLocation();
    const navigate=useNavigate();
    const path=location.pathname;
    //console.log(path)

    const NumofIssue=()=>{
        if(path.includes("User")){
            navigate('/User/stats/')
        }
        else{
            navigate('/Admin/stats/')
        }
    }

    const IssueperStatus=()=>{
        if(path.includes("User")){
            navigate('/User/stats/status')
        }
        else{
            navigate('/Admin/stats/status')
        }
    }

    const IssueperTags=()=>{
        if(path.includes("User")){
            navigate('/User/stats/tags')
        }
        else{
            navigate('/Admin/stats/tags')
        }
    }

    return(
        <menu className="bar">
            <nav>
                <ul>
                    <li onClick={NumofIssue}>이슈 발생 횟수</li>
                    <li onClick={IssueperStatus}>상태별 이슈 개수</li>
                    <li onClick={IssueperTags}>태그별 이슈 개수</li>
                </ul>
            </nav>
        </menu>
    );
}

export default Statsbar