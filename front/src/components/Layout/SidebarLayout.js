import '../../App.css'
import Sidebar from '../Sidebar/Sidebar';

const SidebarLayout=(props)=>{
    return(
        <div className='flexbox'>
            <Sidebar/>
            <main className='sidebar'>
                {props.children}
            </main>
        </div>
    );
}

export default SidebarLayout