import api from "./apis";

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

export const browseIssue=async()=>{
    
    try{
        const res= await api.get("/issue/browse/"+1);
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}