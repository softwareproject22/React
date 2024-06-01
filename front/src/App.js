import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserRouter from './Router/UserRouter';
import AdminRouter from './Router/AdminRouter';
import Login from './pages/Login/Login';
import { CookieProvider } from './cookies';

function App() {
  return (
    <CookieProvider>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Admin/*' element={<AdminRouter />}/>
        <Route path='/User/*' element={<UserRouter />}/>
      </Routes>
    </CookieProvider>
  );
}

export default App;
