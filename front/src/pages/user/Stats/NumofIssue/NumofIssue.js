import { useState } from "react";
import MonthlyIssuesChart from "../Charts/MonthlyIssueCharts";
import '../Stats.css'
import DailyIssuesChart from "../Charts/DailyIssuesChart";

function NumofIssue(){
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

    return(
        <div className="numofIssue">
            <div className="topic">이슈 발생 횟수</div>
            {month?<MonthlyIssuesChart/>:<DailyIssuesChart/>}
            <span className="switch">
                <button className={month?"highlightbtn":null} onClick={Monthchart}>Month</button>/
                <button className={month?null:"highlightbtn"} onClick={Datechart}>Date</button>
            </span>
        </div>
    );
}

export default NumofIssue