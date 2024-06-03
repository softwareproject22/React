import { useEffect, useState } from "react";
import MonthlyIssuesChart from "../Charts/MonthlyIssueCharts";
import '../Stats.css'
import DailyIssuesChart from "../Charts/DailyIssuesChart";
import { analyzeDaily, analyzeMonthly } from "../../../../apis/analyze";

function NumofIssue(){
    const [data, setData]=useState([])
    const Month=[
        { key: "2024-01", month: 'January'},
        { key: "2024-02", month: 'February'},
        { key: "2024-03", month: 'March'},
        { key: "2024-04", month: 'April'},
        { key: "2024-05", month: 'May'},
        { key: '2024-06', month: 'June'},
        { key: "2024-07", month: 'July'},
        { key: "2024-08", month: 'August'},
        { key: "2024-09",  month: 'September'},
        { key: "2024-10", month: 'October'},
        { key: "2024-11", month: 'November'},
        { key: "2024-12", month: 'December'}
    ]
    const monthlyData=async()=>{
        const res=analyzeMonthly();
        //console.log(res)
        res.then(promiseresult => {
            const data = promiseresult.data;
            //console.log(data);

            let newlist=[]
            Month.forEach(item=>{
                const value=data[item.key];
                console.log(value)
                let datakey={month:item.month, issues : value !== undefined ? value : 0};
                newlist.push(datakey);
            })
            console.log(newlist)

            if(newlist.length===0){
                alert("이슈가 존재하지 않습니다")
            }
            setData(newlist)
        });
    }

    const DailyData=async()=>{
        const res=analyzeDaily();
        console.log(res)
        res.then(promiseresult => {
            const data = promiseresult.data;
            console.log(data);

            let newlist=[]
            for(let i=1;i<=31;i++){
                const value= data[`${i}`];
                let datakey={date: `${i}`, issues: value !== undefined ? value : 0}
                newlist.push(datakey);
            }
            console.log(newlist)

            if(newlist.length===0){
                alert("이슈가 존재하지 않습니다")
            }
            setData(newlist)
        });
    }

    const [month, setMonth]=useState(true);

    const Monthchart=()=>{
        if(!month){
            setMonth(true)
        }
    }

    const Datechart=()=>{
        if(month){
            setMonth(false)
        }
    }

    useEffect(()=>{
        if(month){
            monthlyData();
        }
        else{
            DailyData();
        }
    },[month])

    return(
        <div className="numofIssue">
            <div className="topic">이슈 발생 횟수</div>
            {month?<MonthlyIssuesChart data={data}/>:<DailyIssuesChart data={data}/>}
            <span className="switch">
                <button className={month?"highlightbtn":null} onClick={Monthchart}>Month</button>/
                <button className={month?null:"highlightbtn"} onClick={Datechart}>Date</button>
            </span>
        </div>
    );
}

export default NumofIssue