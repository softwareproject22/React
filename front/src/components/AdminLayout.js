import '../App.css'
import AdminHeader from './Header/AdminHeader';

const AdminLayout=(props)=>{
    return(
        <div className="layout">
            <AdminHeader/>
            <main className="main">
                {props.children}
            </main>
        </div>
    );
}

export default AdminLayout