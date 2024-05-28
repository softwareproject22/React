import { useState } from 'react';
import './AddAccount.css'

function AddAccount(){
    const [nickname, setNickname]=useState("");
    const [userId, setUserId]=useState("");
    const [pwd, setPwd]=useState("");
    const [cpwd, setCpwd]=useState("");
    const [role, setRole]=useState("");

    const data=[
        {id: 1, account:"Admin",userId:"Chungang",role:"Admin",lastlogin:"2024-05-29"}
    ];

    return(
        <div>
            <div className="title">Account</div>
            <form className='addacount'>
                <span>
                <div className='horizon'>
                    <label for='nickname'>Nickname :</label>
                    <input type="text" id="nickname" value={nickname} required onChange={event => setNickname(event.currentTarget.value)}></input>
                    
                    <label for='userId'>User Id :</label>
                    <input type="text" id="userId" value={userId} required onChange={event => setUserId(event.currentTarget.value)}></input>
                </div>
                <div className='horizon'>
                    <label for='pwd'>Password :</label>
                    <input type="password" id="pwd" value={pwd} required onChange={event => setCpwd(event.currentTarget.value)}></input>
                    
                    <label for='cpwd'>Confirm Password :</label>
                    <input type="password" id="cpwd" value={cpwd} required onChange={event => setPwd(event.currentTarget.value)}></input>
                </div>
                <div className='horizon'>
                    <label for='role'>Role :</label>
                    <input type="text" id="role" value={role} required onChange={event => setRole(event.currentTarget.value)}></input>
                    
                    <label></label>
                    <div></div>
                </div><br/>
                </span>
                <input type='submit' value="등록"></input>
            </form>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Account</th>
                        <th>User Id</th>
                        <th>Role</th>
                        <th>Last Login</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                    <tr key={item.id}>
                        <td><input type='checkbox'/></td>
                        <td className='id'>{item.account}</td>
                        <td>{item.userId}</td>
                        <td>{item.role}</td>
                        <td>{item.lastlogin}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
}

export default AddAccount