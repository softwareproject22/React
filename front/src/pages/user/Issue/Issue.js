import { useEffect, useState } from "react";
import './Issue.css'
import { createIssue } from "../../../apis/issue";

const TagList=[
    {key: 0, value: "태그를 선택하세요"},
    {key: 1, value: "로그인"},
    {key: 2, value: "회원가입"},
    {key: 3, value: "이슈생성"},
    {key: 4, value: "코멘트"},
    {key: 5, value: "기능요청"},
    {key: 6, value: "개선점"},
    {key: 7, value: "보안"},
    {key: 8, value: "태그"}
]

function Issue(){
    //const { getUserCookie }=useCookieContext();
    //const userInfo=getUserCookie();
    //const {loginId}=userInfo;
    const role=window.sessionStorage.getItem('role')
    const nickname=window.sessionStorage.getItem('nickname');
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [tag, setTag]=useState([]);
    const [opt, setOpt]=useState(TagList[0].value);
    const [priority, setPriority]=useState('major');

    useEffect(()=>{
        if(tag.length===0){
            setOpt(TagList[0].value)
        }
        //console.log(tag)
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
            if(!tag.includes(event.target.value)&&event.target.value!==0){
                var list=[...tag]
                list.push(event.target.value)
                setTag(list)
            }
            setOpt(event.target.child)
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
            nickname : nickname,
            priority : priority,
            tags : tag
        }
        //console.log(data);

        if(role!=="TESTER"){
            alert("이슈 등록 권한이 없습니다.")
            setTitle("")
            setDescription("");
            setTag([])
            setPriority('major')
        }
        else{
            const res=createIssue(data)
            res.then(promiseresult => {
                const data = promiseresult.data;
                //console.log(data.data);
                if(data==="이슈가 생성되었습니다."){  
                    alert("이슈가 등록되었습니다")
                    setTitle("")
                    setDescription("");
                    setTag([])
                    setPriority('major')
                }
                else{
                    alert(data)
                }
            });
        }
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
                            <option value={TagList[0].key}>{TagList[0].value}</option>
                            <option value={TagList[1].key}>{TagList[1].value}</option>
                            <option value={TagList[2].key}>{TagList[2].value}</option>
                            <option value={TagList[3].key}>{TagList[3].value}</option>
                            <option value={TagList[4].key}>{TagList[4].value}</option>
                            <option value={TagList[5].key}>{TagList[5].value}</option>
                            <option value={TagList[6].key}>{TagList[6].value}</option>
                            <option value={TagList[7].key}>{TagList[7].value}</option>
                            <option value={TagList[8].key}>{TagList[8].value}</option>
                        </select>
                    
                        <label htmlFor="priority">Priority :</label>
                        <select id="priority" value={priority} onChange={prioritySelectChange}>
                            <option value="blocker">blocker</option>
                            <option value="critical">critical</option>
                            <option value="major">major</option>
                            <option value="minor">minor</option>
                            <option value="trivial">trivial</option>
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
            <li key={res} onClick={()=>removeTag(res)}><span></span>{TagList[res].value}<span className="remove_btn">x</span></li>
        )
      })
    );
}
  

export default Issue