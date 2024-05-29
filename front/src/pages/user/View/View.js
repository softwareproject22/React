import { useNavigate } from 'react-router-dom';
import './View.css'
import { useEffect, useState } from 'react';
import { SearchAssignedIssue, SearchIssuebyStatus, SearchReportedIssue, browseIssue } from '../../../apis/issue';

//테이블 스크롤 추가
function View(){
    const [data, setData]=useState([]);
    const [search, setSearch]=useState("");
    const navigate=useNavigate();
    const userRole="PL";
    
    const PLData = async () => {
        try{
            const res=browseIssue();
            
            res.then(promiseresult => {
                const data = promiseresult;
                //console.log(data);
                setData(data)
            });
        }
        catch(err){
          console.log(err)
        }
    }

    const loadIssue=()=>{    
        const DevData = async () => {
            try{
                const res=SearchAssignedIssue();
                
                res.then(promiseresult => {
                    const data = promiseresult;
                    //console.log(data);
                    setData(data)
                });
            }
            catch(err){
              console.log(err)
            }
        }

        const TesterData = async () => {
            try{
                const res=SearchReportedIssue();
                
                res.then(promiseresult => {
                    const data = promiseresult;
                    //console.log(data);
                    setData(data)
                });
            }
            catch(err){
              console.log(err)
            }
        }

        if(userRole==="Dev"){
            DevData();
        }
        else if(userRole==="Tester"){
            TesterData();
        }
        else{
            PLData();    
        }
    }

    const searchIssue=(e)=>{
        const fetchData = async () => {
            try{
                const res=SearchIssuebyStatus(search);
                
                res.then(promiseresult => {
                    const data = promiseresult.data;
                    //console.log(data);
                    setData(data)
                });
            }
            catch(err){
              console.log(err)
            }
        }

        if(e.key==="Enter"){
            if(search==="all"){
                PLData();
            }
            else{
                fetchData();
            }
        }
    }

    useEffect(()=>{
        loadIssue();
    },[])

    const getDetail=(props)=>{
        navigate('/User/detail/'+props)
    }

    return(
        <div className='view'>
            <div><input type="search" value={search} placeholder="🔍 키워드로 검색하기" onKeyDown={searchIssue} onChange={event => setSearch(event.currentTarget.value)}></input></div>
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
                        <td onClick={()=>getDetail(item.id)}>{item.title}</td>
                        <td>{item.tag}</td>
                        <td>{item.status}</td>
                        <td>{item.priority}</td>
                        <td>{item.reportedTime}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
}

export default View