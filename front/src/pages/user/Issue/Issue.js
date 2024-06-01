import { useEffect, useState } from "react";
import './Issue.css'
import { createIssue } from "../../../apis/issue";

function Issue(){
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [tag, setTag]=useState([]);
    const [opt, setOpt]=useState("");
    const [priority, setPriority]=useState('opt1');

    useEffect(()=>{
        if(tag.length===0){
            setOpt("blank")
        }
        console.log(tag)
    },[tag])


    const removeTag=(props)=>{
        if(tag.includes(props)){
            var list=tag.filter(item => item!==props);
            setTag(list)
        }
        else{
            alert("오류!")
        }
    }

    const tagSelectChange=(event)=>{
        if(tag.length===2&&!tag.includes(event.target.value)){
            alert("태그 선택은 두 개까지만 가능합니다")
        }
        else{
            if(!tag.includes(event.target.value)&&event.target.value!=='blank'){
                var list=[...tag]
                list.push(event.target.value)
                setTag(list)
            }
            setOpt(event.target.value)
        }
    }

    const prioritySelectChange=(event)=>{
        setPriority(event.target.value)
    }

    const postIssue=async(event)=>{
        event.preventDefault();
        if(tag.length===0){
            alert("태그를 선택해주세요")
        }
        else{
        let data={
            title : title,
            description : description,
            tag : tag,
            priority : priority
        }

        const res=createIssue(data)
        res.then(promiseresult => {
            const data = promiseresult.data;
            console.log(data);
            if(data==="이슈가 생성되었습니다."){  
                alert("이슈가 등록되었습니다")
                setTitle("")
                setDescription("");
                setTag([])
                setPriority('opt1')
            }
            else{
                alert(data)
            }
        });
        }
    }

    return(
        <div className="flexbox">
            <div className="title">Issue 등록하기</div>
            <form className="register" onSubmit={postIssue}>
                <div>
                    <span>
                        <label htmlFor="title">Title :</label>
                        <input type="text" id="title" value={title} required onChange={event => setTitle(event.currentTarget.value)}></input>
                    </span>

                    <span>
                        <label htmlFor="description">Description :</label><br/><br/>
                        <input className="body" type="text" id="description" value={description} required onChange={event => setDescription(event.currentTarget.value)}></input>
                    </span>

                    <span className="tag">
                        <ul>
                            <List list={tag} removeTag={removeTag}></List>
                        </ul>
                    </span>

                    <span>
                        <label htmlFor="tag">Tag :</label>
                        <select id="tag" value={opt} onChange={tagSelectChange}>
                            <option value='blank'>태그를 선택하세요</option>
                            <option value="로그인">로그인</option>
                            <option value="회원가입">회원가입</option>
                            <option value="이슈생성">이슈생성</option>
                            <option value="코멘트">코멘트</option>
                            <option value="기능요청">기능요청</option>
                            <option value="개선점">개선점</option>
                            <option value="보안">보안</option>
                            <option value="태그">태그</option>
                        
                        </select>
                    
                        <label htmlFor="priority">Priority :</label>
                        <select id="priority" value={priority} onChange={prioritySelectChange}>
                            <option value="opt1">Option 1</option>
                            <option value="opt2">Option 2</option>
                        </select>
                    </span>
                </div>
                <input type="submit" value="등록"></input>
            </form>
        </div>

    );
}

function List(props){
    const removeTag=(res)=>{
        props.removeTag(res)
    }

    return(
      props.list.map((res)=>{
        return(
            <li key={res} onClick={()=>removeTag(res)}><span></span>{res}<span className="remove_btn">x</span></li>
        )
      })
    );
}
  

export default Issue