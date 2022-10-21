import { Navigate, Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.scss';
import CategoryPage from './components/category-page/CategoryPage';
import Login from './components/login-register/Login';
import Register from './components/login-register/Register';
import Homepage from './components/Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './reusibleComponents/Header';
import { useSelector } from 'react-redux';

function App() {

  const loggedUser = localStorage.getItem('rememberUser')

  return (
    loggedUser ? 
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'} />} />
        <Route path='/login' element={<Navigate to={'/home'} />} />
        <Route path='/home' element={<Homepage link={ <Link to={'/products'}>Products</Link>}  />} />
        <Route path='/products' element={<CategoryPage />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>

    </> :
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Navigate to={'/login'}/>} />
      </Routes>
    </>
  )
}
export default App
