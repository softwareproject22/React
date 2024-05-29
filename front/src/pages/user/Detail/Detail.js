import { useParams } from 'react-router-dom';
import './Detail.css'
import { useState } from 'react';
import { getIssue } from '../../../apis/issue';

//history 눌렀을때 모달로 comment history 불러오도록
function Detail(){
    const params=useParams();
    const [detail, setDetail]=useState([])

    useState(()=>{
        const fetchData = async () => {
            try{
                const res=getIssue(params.id)
                res.then(promiseresult => {
                    const data = promiseresult.data;
                    console.log(data);
                    setDetail(data)
                });
            }
            catch(err){
              console.log(err)
            }
        }

        fetchData();
    },[])

    const handleComment=()=>{

    }

    const handleFix=()=>{

    }

    return(
        <div className='detailview'>
            <span>
                <header>
                    <div className='row'>
                        <div className='highlight'>
                            <div id='num'>#{detail.id}</div>
                            <div id='status'>{detail.status}</div>
                        </div>
                        <button>수정</button>
                    </div>
                    <div id='title'>{detail.title}</div>
                </header>
                <main>
                    <div className='horizon'>
                        <label htmlFor='reporter'>Reporter :</label>
                        <div id='reporter'>{detail.reporter}</div>

                        <label htmlFor='assignee'>Assignee :</label>
                        <div id='assignee'>{detail.assignee===null?"-":detail.assignee}</div>
                    </div>
                    <div className='horizon'>
                        <label htmlFor='priority'>Priority :</label>
                        <div id='priority'>{detail.priority}</div>

                        <label htmlFor='tag'>Tag :</label>
                        <div id='tag'>tag</div>
                    </div>
                    <div className='horizon'>
                        <label htmlFor='fixer'>Fixer :</label>
                        <div id='fixer'>{detail.fixer===null?"-":detail.fixer}</div>

                        <label></label>
                        <div></div>
                    </div><br/>
                </main>
                <footer>
                    <label htmlFor='description'>Description :</label>
                    <div id='line'></div>
                    <div id='description'>{detail.description}</div>
                </footer>
            </span>
            <button className='history'>...</button>
            <form onSubmit={handleComment}>
                <input type='text' placeholder='Comment'></input>
                <input type='submit' value="추가"></input>
            </form>
        </div>
    );
}

export default Detail