import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home'
import Reviews from './component/Reviews/Reviews'
import Blogs from './component/Blogs/Blogs'
import Dashboard from './component/Dashboard/Dashboard';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}
        ></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>

      </Routes>
    </div>
  );
}

export default App;
