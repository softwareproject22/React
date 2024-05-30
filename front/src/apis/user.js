import api from "./apis";

//post
//계정 추가
export const addAccount=async(props)=>{
    let data={
        loginId : props.id,
        password : props.pwd,
        passwordCheck: props.pwdCheck,
        nickname: props.nickname,
        role: props.role
    }

    try{
        const res=api.post('/home/join', data)
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//로그인
export const userLogin=async(props)=>{
    let data={
        loginId : props.id,
        password : props.pwd,
    }

    try{
        const res=api.post('/home/login', data)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//get
//로그아웃
export const Logout=()=>{
    try{
        const res=api.get('/home/logout')
        //console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//userId를 통해 유저정보 탐색
export const SearchUserById=(userId)=>{
    try{
        const res=api.get('/home/info/'+userId)
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//모든 유저정보
export const getUserlist=()=>{
    try{
        const res=api.get('/home/userlist')
        //console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}