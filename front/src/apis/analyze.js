import api from "./apis";

//get
//일별 이슈 통계
export const analyzeDaily=()=>{
    try{
        const res=api.get('/analyze/daily')
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//월별 이슈 통계
export const analyzeMonthly=()=>{
    try{
        const res=api.get('/analyze/monthly')
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//상태별 이슈 통계
export const analyzeStatus=()=>{
    try{
        const res=api.get('/analyze/status')
        //console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

//태그별 이슈 통계
export const analyzeTags=()=>{
    try{
        const res=api.get('/analyze/tags')
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
    }
}