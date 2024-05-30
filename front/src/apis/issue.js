import api from "./apis";

//post
//이슈 생성
export const createIssue=async(props)=>{
    let data={
        projectId: 1,
        title: props.title,
        description: props.description,
        code: "코드",
        reporter:"sam",
        priority: props.priority,
        tags: [1,2]
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
    let data={
        nickname:"",
        status:""
    }

    try{
        const res= await api.put("/issue/changeStatus"+props.issueId, data);
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//담당자 배정
export const Assign=async(props)=>{
    let data={
        nickname:"",
        assignedUserId:""
    }

    try{
        const res= await api.put("/issue/changeAssignee"+props.issueId, data);
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//assigned로 상태 변경
export const changeAssigned=async(props)=>{
    try{
        const res= await api.put("/issue/changeAssigned"+props.issueId);
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
        const res= await api.put("/issue/changeFixer"+props.issueId);
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
export const SearchAssignedIssue=async()=>{
    
    try{
        //reporter=props.userId로 탐색
        const assignee=null;
        const res= await api.get("/issue/searchByAssignee/1/"+assignee);
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//등록한 이슈 검색(tester view)
export const SearchReportedIssue=async()=>{
    
    try{
        //reporter=props.userId로 탐색
        const reporter=null;
        const res= await api.get("/issue/searchByReporter/1/"+reporter);
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}
