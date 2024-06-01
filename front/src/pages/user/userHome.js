import { useEffect } from "react";
import { useCookieContext } from "../../cookies";

function Userhome(){
    const { getUserCookie }=useCookieContext();
    const userInfo=getUserCookie();
    const {loginId, role, nickname}=userInfo;

    useEffect(()=>{
        console.log(loginId, role, nickname)
    },[])
    return(
        <div>
            Welcome to our Issue Management System.
            <br/>...
        </div>
    );
}

export default Userhome