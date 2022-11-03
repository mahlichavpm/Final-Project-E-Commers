import { Navigate, Route, Routes } from 'react-router';
import './App.scss';
import CategoryPage from './pages/category-page/CategoryPage';
import Login from './pages/login-register/Login';
import Register from './pages/login-register/Register';
import Homepage from './pages/homePage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import ProductPage from './pages/productPage/ProductPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import AllProductsList from './pages/allProducts/AllProductsList';
import AdminPage from './pages/adminPage/AdminPage';
import FavoritesPage from './pages/favoritesPage/FavouritePage';
import CartPage from './pages/cartPage/CartPage'
import HistoryPage from './pages/historyPage/HistoryPage';
import { useSelector } from 'react-redux';
import Footer from './components/footer/Footer';
import ErrorPage from './pages/errorPage/ErrorPage';
import OrderPage from './pages/orderPage/OrderPage';


function App() {
  const admin = useSelector(state => state.activeUser.admin);
  const userId = useSelector(state => state.activeUser.sessionId || localStorage.getItem('accountId'));

  return (
    admin ?
      <Routes>
        <Route path='/admin' element={<AdminPage />} />
        <Route path='*' element={<Navigate to={'/admin'} />} />
      </Routes> :
      <>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<Navigate to={'/home'} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Homepage />} />
            <Route path='/history' element={<HistoryPage />} />
            <Route path='/favourites' element={<FavoritesPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/profile' element={ userId ? <ProfilePage /> : <Navigate to={'/login'}/>} />
            <Route path='/order' element={ userId ? <OrderPage /> : <Navigate to={'/home'}/>} />
            <Route path='/:globalCategory' element={<CategoryPage />} />
            <Route path='/:globalCategory/:subCategory' element={<AllProductsList />} />
            <Route path='/:globalCategory/:subCategory/:key' element={<ProductPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </>
  )
}
export default App
