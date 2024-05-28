import { Route, Routes } from 'react-router-dom';
import AddProject from './AddProject/AddProject';
import SidebarLayout from '../../components/Layout/SidebarLayout'
import AddAccount from './AddAccount/AddAccount';

function Admin() {
  return (
    <SidebarLayout>
        <Routes>
            <Route path='/' element={<AddProject />}/>
            <Route path='/addaccount' element={<AddAccount />}/>
        </Routes>
    </SidebarLayout>
  );
}

export default Admin