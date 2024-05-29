import '../../App.css'
import Statsbar from '../Statsbar/Statsbar';

const StatsbarLayout=(props)=>{
    return(
        <div className='box'>
            <Statsbar/>
            <main className='sidebar'>
                {props.children}
            </main>
        </div>
    );
}

export default StatsbarLayout