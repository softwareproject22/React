import { useState } from "react";
import './Issue.css'
import { createIssue } from "../../../apis/issue";

function Issue(){
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [tag, setTag]=useState('opt1');
    const [priority, setPriority]=useState('opt1');

    const tagSelectChange=(event)=>{
        setTag(event.target.value)
    }

    const prioritySelectChange=(event)=>{
        setPriority(event.target.value)
    }

    const postIssue=async(event)=>{
        event.preventDefault();
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
                setTag('opt1')
                setPriority('opt1')
            }
            else{
                alert(data)
            }
        });
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

                    <span>
                        <label htmlFor="tag">Tag :</label>
                        <select id="tag" value={tag} onChange={tagSelectChange}>
                            <option value="opt1">Option 1</option>
                            <option value="opt2">Option 2</option>
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

export default Issue