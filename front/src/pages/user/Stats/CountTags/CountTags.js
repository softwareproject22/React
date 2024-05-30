import { useEffect, useState } from "react";
import { analyzeTags } from "../../../../apis/analyze";
import StatusChart from "../Charts/StatusChart";

function CountTags(){
    const [data,setData]=useState([])
    
    const getData=async()=>{
        const res=analyzeTags();
        res.then(promiseresult => {
            const data = promiseresult.data;
            //console.log(data);

            let newlist=[]
            if(data.로그인!==undefined){
                let datakey={status:"로그인", issues : data.로그인}
                newlist.push(datakey)
            }
            else{
                let datakey={status:"로그인", issues : 0}
                newlist.push(datakey)
            }

            if(data.회원가입!==undefined){
                let datakey={status:"회원가입", issues : data.회원가입}
                newlist.push(datakey)
            }
            else{
                let datakey={status:"회원가입", issues : 0}
                newlist.push(datakey)
            }
            //console.log(newlist)
            setData(newlist)
        });
    }

    useEffect(()=>{
        getData();
    },[])

    return(
        <div className="numofIssue">
            <div className="topic">태그별 이슈 개수</div>
            <StatusChart data={data}/>
        </div>
    );

}

export default CountTags