import api from "./apis";

//코멘트 추가
export const addComment=async(props)=>{
    let data={
        content : props.content,
        issueId : props.issueId,
        sender : props.nickname
    }
    
    try{
        const res=api.post('/comment/add', data);
        //console.log(res)
        return res;
    }
    catch(err){
        console.log(err);
    }
}

//이슈 Id로 코멘트 리스트 탐색
export const SearchComment=async(issueId)=>{
    
    try{
        const res=api.get('/comment/'+issueId);
        //console.log(res)
        return res;
    }
    catch(err){
        console.log(err);
    }
}