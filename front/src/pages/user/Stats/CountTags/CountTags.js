import { useEffect, useState } from "react";
import { analyzeTags } from "../../../../apis/analyze";
import StatusChart from "../Charts/StatusChart";

function CountTags(){
    const TagList=[
        {key: 1, value: "로그인"},
        {key: 2, value: "회원가입"},
        {key: 3, value: "이슈생성"},
        {key: 4, value: "코멘트"},
        {key: 5, value: "기능요청"},
        {key: 6, value: "개선점"},
        {key: 7, value: "보안"},
        {key: 8, value: "태그"}
    ]
    const [data,setData]=useState([])
    
    const getData=async()=>{
        const res=analyzeTags();
        //console.log(res)
        res.then(promiseresult => {
            const data = promiseresult.data;
            //console.log(data);

            let newlist=[]
            TagList.forEach(tag=>{
                const value=data[tag.value];
                let datakey={status:tag.value, issues : value !== undefined ? value : 0};
                newlist.push(datakey);
            })
            console.log(newlist)
            
            if(newlist.length===0){
                alert("이슈가 존재하지 않습니다")
            }
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