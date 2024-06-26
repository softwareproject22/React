import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Userhome from '../pages/user/userHome';
import Issue from '../pages/user/Issue/Issue';
import View from '../pages/user/View/View';
import Detail from '../pages/user/Detail/Detail';
import Layout from '../components/Layout/Layout';
import Stats from '../pages/user/Stats/Stats';
import Comment from '../pages/user/Detail/Comment/Comment';

function UserRouter() {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<Userhome />}/>
            <Route path='/view' element={<View />}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/comment/:id' element={<Comment/>}/>
            <Route path='/issue' element={<Issue/>}/>
            <Route path='/stats/*' element={<Stats />}/>
        </Routes>
    </Layout>
  );
}

export default UserRouter;