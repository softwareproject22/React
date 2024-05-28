import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Userhome from './pages/user/userHome';
import Issue from './pages/user/Issue/Issue';
import View from './pages/user/View/View';
import Detail from './pages/user/Detail/Detail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<Userhome />}/>
        <Route path='/view' element={<View />}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/issue' element={<Issue/>}/>
        <Route path='/stats' element={<Userhome />}/>
        <Route path='/admin' element={<Userhome />}/>
      </Routes>
    </Layout>
  );
}

export default App;
