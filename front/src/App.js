import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserRouter from './Router/UserRouter';
import AdminRouter from './Router/AdminRouter';
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/Admin/*' element={<AdminRouter />}/>
      <Route path='/User/*' element={<UserRouter />}/>
    </Routes>
  );
}

export default App;
