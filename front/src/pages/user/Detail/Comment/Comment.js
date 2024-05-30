import { useLocation, useNavigate, useParams} from 'react-router-dom';
import './Comment.css'
import { useEffect, useState } from 'react';
import { SearchComment } from '../../../../apis/comment';

function Comment(){
    const params=useParams();
    const navigate=useNavigate();
    const location=useLocation();
    const path=location.pathname;
    const [list, setList]=useState([])

    const fetchData = async () => {
        try{
            const res=SearchComment(params.id);
            
            res.then(promiseresult => {
                const data = promiseresult.data;
                //console.log(data);
                setList(data)
            });
        }
        catch(err){
          console.log(err)
        }
    }
    
    useEffect(()=>{
        fetchData();
    },[])

    const gotoBack=()=>{
        if(path.includes("User")){
            navigate('/User/detail/'+params.id)
        }
        else{
            navigate('/Admin/detail/'+params.id)
        }
    }

    return(
        <div className='allcomment'>
            <div className='commentheader'>
                <button onClick={gotoBack}>⭠</button>
                <div className='title'>코멘트</div>
                <div></div>
            </div>
            <div className='commentholder'>
                <List list={list}/>
            </div>
        </div>
    );
    
}

function List(props){
    return(
      props.list.map((res)=>{
        return(
          <ul className='obj'>
            <li key={res.commentId}>
              <span className='Header'>
                <div className='User'>{res.sender}</div>
                <div>&nbsp;&nbsp;</div>
              </span>
              <p className='Box'>
                {res.content}
              </p>
            </li> 
          </ul>
        )
      })
    );
  }

export default Comment