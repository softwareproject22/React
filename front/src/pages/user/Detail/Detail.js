import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './Detail.css'
import { useState } from 'react';
import { Assign, changeAssigned, changeFixer, changeState, getIssue, recommend } from '../../../apis/issue';
import { addComment } from '../../../apis/comment';

function Detail(){
    const role=window.sessionStorage.getItem('role')
    const nickname=window.sessionStorage.getItem('nickname')
    const params=useParams();
    const navigate=useNavigate();
    const location=useLocation();
    const path=location.pathname;
    const [detail, setDetail]=useState([])
    const [tag, setTag]=useState("")
    const [comment, setComment]=useState("");
    const [btnName, setBtnName]=useState(null)
    //담당자 배정
    const [assign, setAssign]=useState(false)
    const [devList, setList]=useState([])
    const [choice, setChoice]=useState("blank")

    const fetchData = async () => {
        try{
            const res=getIssue(params.id)
            res.then(promiseresult => {
                const data = promiseresult.data;
                //console.log(data);
                setDetail(data)
                switch(data.status){
                    case "new" :
                        if(role==="PL" && btnName!=="담당자 배정"){
                            setBtnName("담당자 배정")
                            const re=recommend(params.id);
                            re.then(promiseresult=>{
                                const data=promiseresult.data;
                                setList(data)
                                console.log(data)
                            })
                            //console.log(re)
                        }
                        break;
                    case "assigned" :
                        if(role==="DEV"){
                            setBtnName("fix error")
                        }
                        break;
                    case "fixed":
                        if(role==="TESTER"){
                            setBtnName("수정 확인")
                        }
                        break;
                    case "resolved":
                        if(role==="PL"){
                            setBtnName("이슈 closed")
                        }
                        break;
                    default:
                        console.log(data.status)
                }
                let tag=""
                data.tags.map((item)=>{
                    tag=tag+item.category
                    tag=tag+" "
                })
                setTag(tag)
            });
        }
        catch(err){
          console.log(err)
        }
    }

    useState(()=>{
        fetchData();
    },[])

    const putAssignee=async()=>{
        let data={
            dev : choice,
            issueId : params.id
        }
        try{
            const res=await Assign(data)
            console.log(res)

            const response=await changeAssigned(params.id);
            console.log(response)
        }
        catch(err){
            console.log(err)
        }
    }

    const StatusChange=async(status)=>{
        let data={
            issueId: params.id,
            status: status
        }
        try{
            const res=await changeState(data)
            console.log(res)
        }
        catch(err){
            console.log(err)
        }
    }

    const FixerChange=async()=>{
        try{
            const res=await changeFixer(params.id)
            console.log(res)
        }
        catch(err){
            console.log(err)
        }
    }

    const handleComment=(event)=>{
        event.preventDefault();
        let props={
            content: comment,
            issueId: params.id,
            nickname: nickname
        }

        const fetchData = async () => {
            try{
                const res=addComment(props);
                
                res.then(promiseresult => {
                    const data = promiseresult.data;
                    alert(data);
                });
            }
            catch(err){
              console.log(err)
            }
        }
        fetchData();
        setComment("")        
    }

    const handleFix=async()=>{
        switch(btnName){
            case "담당자 배정" :
                setBtnName("확인")
                setAssign(true)
                break;
            case "fix error" :
                await FixerChange();
                await StatusChange("fixed")
                fetchData();
                setBtnName(null)
                break;
            case "수정 확인":
                await StatusChange("resolved")
                fetchData();
                setBtnName(null)
                break;
            case "이슈 closed":
                await StatusChange("closed")
                fetchData();
                setBtnName(null)
                break;
            case "확인":
                if(choice==="blank"){
                    alert("담당자를 선택하세요")
                }
                else{
                    await putAssignee();
                    setAssign(false)
                    fetchData();
                    setBtnName(null)
                }
                break;
        }
    }

    const loadHistory=()=>{
        if(path.includes("User")){
            navigate('/User/comment/'+params.id)
        }
        else{
            navigate('/Admin/comment/'+params.id)
        }
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
                        <button onClick={handleFix}>{btnName}</button>
                    </div>
                    <div id='title'>{detail.title}</div>
                </header>
                <main>
                    <div className='horizon'>
                        <label htmlFor='reporter'>Reporter :</label>
                        <div id='reporter'>{detail.reporter}</div>

                        <label htmlFor='assignee'>Assignee :</label>
                        {assign?
                        <div id='assignee'>
                            <select id='devlist' value={choice} onChange={(event)=>{setChoice(event.target.value)}}>
                                <option value={"blank"}>담당자 설정</option>
                                <Recommend list={devList}/>
                            </select>
                        </div>
                        :<div id='assignee'>{(detail.assignee===null)?"-":detail.assignee}</div>
                        }
                    </div>
                    <div className='horizon'>
                        <label htmlFor='priority'>Priority :</label>
                        <div id='priority'>{detail.priority}</div>

                        <label htmlFor='tag'>Tag :</label>
                        <div id='tag'>{tag}</div>
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
            <button className='history' onClick={loadHistory}>...</button>
            <form onSubmit={handleComment}>
                <input type='text' value={comment} placeholder='Comment' required onChange={(event)=>setComment(event.currentTarget.value)}></input>
                <input type='submit' value="추가"></input>
            </form>
        </div>
    );
}

function Recommend(props){
    return(
        props.list.map((item=>{
        //console.log(item)
            return(
                <option key={item} value={item}>{item}</option>
            );
        }))
    );
}

export default Detail