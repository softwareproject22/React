import './AddProject.css'
import { useState } from 'react';

function AddProject(){
    const [name, setName]=useState('');
    const [description, setDescription]=useState("");

    return(
        <div>
            <div className="title">Project</div>
            <form className="addpj">
                <div>
                    <span>
                        <label for="name">Name :</label><br/><br/>
                        <input type="text" id="name" value={name} required onChange={event => setName(event.currentTarget.value)}></input>
                    </span><br/>

                    <span>
                        <label for="description">Description :</label><br/><br/>
                        <input className="body" type="text" id="description" value={description} required onChange={event => setDescription(event.currentTarget.value)}></input>
                    </span>
                </div>
                <input type="submit" value="등록"></input>
            </form>
        </div>
    );
}

export default AddProject