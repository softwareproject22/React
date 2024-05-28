import Header from "../Header/Header";
import '../../App.css'

const Layout=(props)=>{
    return(
        <div className="layout">
            <Header/>
            <main className="main">
                {props.children}
            </main>
        </div>
    );
}

export default Layout