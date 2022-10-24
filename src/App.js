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
import ReviewPage from './pages/reviewPage/ReviewPage';
import { useSelector } from 'react-redux';

function App() {

  const loggedUser = useSelector(state => state.activeUser.sessionId) || localStorage.getItem('rememberUser') ;
  // const loggedUser = localStorage.getItem('rememberUser');
  const admin = useSelector(state => state.activeUser.admin);
  // const userId = localStorage.getItem('accountId');
  // za logOut ^

  // return (
  //   <ProfilePage/>
  //   // <ProductPage/>
  //   // <AllProductsList/>
  //   // <Banner/>
  // )

  return (
    admin ?
     <Routes>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='*' element={<Navigate to={'/admin'}/>}/>
    </Routes> :
    loggedUser ? 
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Navigate to={'/home'} />} />
          <Route path='/login' element={<Navigate to={'/home'} />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/products' element={<CategoryPage />} />
          <Route path='/history' element={<HistoryPage />} />
          <Route path='/favourites' element={<FavoritesPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/review' element={<ReviewPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/products/category' element={<AllProductsList />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </main>
      </>
    :
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
