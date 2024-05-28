import { useNavigate } from 'react-router-dom';
import './View.css'

//테이블 스크롤 추가
function View(){
    const data=[
        {id: 1, title: "개발자 로그인 시 문제", tag : "로그인" ,state:"new", priority:"major", created:"2024.05.28" }
    ];
    const navigate=useNavigate();

    const getDetail=()=>{
        navigate('/User/detail')
    }

    return(
        <div className='view'>
            <div><input type="search" placeholder="🔍 키워드로 검색하기"></input></div>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th>Issue</th>
                        <th>Title</th>
                        <th>Tag</th>
                        <th>State</th>
                        <th>Priority</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                    <tr key={item.id}>
                        <td className='id'>#{item.id}</td>
                        <td onClick={getDetail}>{item.title}</td>
                        <td>{item.tag}</td>
                        <td>{item.state}</td>
                        <td>{item.priority}</td>
                        <td>{item.created}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
}

export default View