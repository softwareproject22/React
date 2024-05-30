import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Userhome from '../pages/user/userHome';
import Issue from '../pages/user/Issue/Issue';
import View from '../pages/user/View/View';
import Detail from '../pages/user/Detail/Detail';
import AdminLayout from '../components/Layout/AdminLayout';
import Admin from '../pages/admin/Admin';
import Stats from '../pages/user/Stats/Stats';
import Comment from '../pages/user/Detail/Comment/Comment';

function AdminRouter() {
  return (
    <AdminLayout>
      <Routes>
        <Route path='/' element={<Userhome />}/>
        <Route path='/view' element={<View />}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/comment/:id' element={<Comment/>}/>
        <Route path='/issue' element={<Issue/>}/>
        <Route path='/stats/*' element={<Stats />}/>
        <Route path='/admin/*' element={<Admin/>}/>
      </Routes>
    </AdminLayout>
  );
}

export default AdminRouter;