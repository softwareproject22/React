import { analyzeStatus } from "../../../../apis/analyze";
import { useEffect, useState } from "react";
import StatusChart from "../Charts/StatusChart";

function CountStatus(){
    const [data,setData]=useState([])
    
    const getData=async()=>{
        const res=analyzeStatus();
        res.then(promiseresult => {
            const data = promiseresult.data;
            //console.log(data);

            let newlist=[]
            if(data.new!==undefined){
                let datakey={status:"new", issues : data.new}
                newlist.push(datakey)
            }else{
                let datakey={status:"new", issues : 0}
                newlist.push(datakey)
            }

            if(data.assigned!==undefined){
                let datakey={status:"assigned", issues : data.assigned}
                newlist.push(datakey)
            }else{
                let datakey={status:"assigned", issues : 0}
                newlist.push(datakey)
            }

            if(data.fixed!==undefined){
                let datakey={status:"fixed", issues : data.fixed}
                newlist.push(datakey)
            }
            else{
                let datakey={status:"fixed", issues : 0}
                newlist.push(datakey)
            }

            if(data.resolved!==undefined){
                let datakey={status:"resolved", issues : data.resolved}
                newlist.push(datakey)
            }
            else{
                let datakey={status:"resolved", issues : 0}
                newlist.push(datakey)
            }
      
            if(data.closed!==undefined){
                let datakey={status:"closed", issues : data.closed}
                newlist.push(datakey)
            }
            else{
                let datakey={status:"closed", issues : 0}
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
            <div className="topic">상태별 이슈 개수</div>
            <StatusChart data={data}/>
        </div>
    );

}

export default CountStatus