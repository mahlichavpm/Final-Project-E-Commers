import { Navigate, Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import CategoryPage from './components/category-page/CategoryPage';
import Login from './components/login-register/Login';
import Register from './components/login-register/Register';
import Homepage from './components/Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './reusibleComponents/Header';

function App() {
  return (
    <>
      <Header />
      <div className='nav'>
        <Link to={'/login'}>Login</Link>
        <br />
        <Link to={'/register'}>Register</Link>
      </div>

      <Routes>
        <Route path='/' element={<Navigate to={'/home'} />} />
        <Route path='/home' element={<Homepage link={ <Link to={'/products'}>Products</Link>}  />} />
        <Route path='/products' element={<CategoryPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>

    </>
  )
}
export default App
