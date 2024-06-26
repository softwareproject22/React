import api from "./apis";

//post
//이슈 생성
export const createIssue=async(props)=>{
    let data={
        projectId: 1,
        title: props.title,
        description: props.description,
        code: "코드",
        reporter:props.nickname,
        priority: props.priority,
        tags: props.tags
    };

    try{
        const res= await api.post("/issue", data);
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//put
//status 변경
export const changeState=async(props)=>{
    const nickname=window.sessionStorage.getItem('nickname')
    let data={
        nickname:nickname,
        status:props.status
    }

    try{
        const res= await api.put("/issue/changeStatus/"+props.issueId, data);
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//담당자 배정
export const Assign=async(props)=>{
    const nickname=window.sessionStorage.getItem('nickname')
    let data={
        nickname:props.dev,
        pl: nickname
    }

    try{
        const res= await api.put("/issue/changeAssignee/"+props.issueId, data);
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//assigned로 상태 변경
export const changeAssigned=async(issueId)=>{
    try{
        const res= await api.put("/issue/changeAssigned/"+issueId);
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//코드 수정
export const fixCode=async()=>{

}

//fixer 변경
export const changeFixer=async(props)=>{
    try{
        const res= await api.put("/issue/changeFixer/"+props);
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//get
//이슈 Id로 이슈 검색
export const getIssue=async(issueId)=>{
    try{
        const res= await api.get("/issue/"+issueId);
        //console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//상태로 이슈 검색
export const SearchIssuebyStatus=async(props)=>{
    try{
        const res= await api.get("/issue/searchByState/1/"+props);
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}


//브라우즈(PL view)
export const browseIssue=async()=>{
    try{
        const res= await api.get("/issue/browse/"+1);
        var data=await res.data;
        return data;
    }
    catch(err){
        console.log(err)
    }
}

//배정된 이슈 검색(Dev view)
export const SearchAssignedIssue=async(props)=>{
    const nickname=window.sessionStorage.getItem('nickname');
    try{
        const res= await api.get("/issue/searchByAssignee/1/"+nickname);
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//등록한 이슈 검색(tester view)
export const SearchReportedIssue=async(reporter)=>{
    const nickname=window.sessionStorage.getItem('nickname');
    try{
        const res= await api.get("/issue/searchByReporter/1/"+nickname);
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//담당자 추천
export const recommend=async(issueId)=>{
    try{
        const res= await api.get("/recommend/assigneesForIssue/"+issueId);
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}