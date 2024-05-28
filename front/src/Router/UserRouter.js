import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Userhome from '../pages/user/userHome';
import Issue from '../pages/user/Issue/Issue';
import View from '../pages/user/View/View';
import Detail from '../pages/user/Detail/Detail';
import Layout from '../components/Layout/Layout';

function UserRouter() {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<Userhome />}/>
            <Route path='/view' element={<View />}/>
            <Route path='/detail' element={<Detail/>}/>
            <Route path='/issue' element={<Issue/>}/>
            <Route path='/stats' element={<Userhome />}/>
        </Routes>
    </Layout>
  );
}

export default UserRouter;