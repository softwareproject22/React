import { useState } from "react";
import './Issue.css'

function Issue(){
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');


    return(
        <div>
            <div className="title">Issue 등록하기</div>
            <form className="register">
                <div>
                    <span>
                        <label for="title">Title :</label>
                        <input type="text" id="title" value={title} required onChange={event => setTitle(event.currentTarget.value)}></input>
                    </span>

                    <span>
                        <label for="description">Description :</label><br/><br/>
                        <input className="body" type="text" id="description" value={description} required onChange={event => setDescription(event.currentTarget.value)}></input>
                    </span>

                    <span>
                        <label for="tag">Tag :</label>
                        <select id="tag">
                            <option value="opt1">Option 1</option>
                            <option value="opt2">Option 2</option>
                        </select>
                    
                        <label for="priority">Priority :</label>
                        <select id="priority">
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