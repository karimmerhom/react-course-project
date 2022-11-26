import './App.css';
import {Routes , Route} from 'react-router-dom';
import Header from './components/header/header.component'
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/shopPage';
import CheckoutPage from './pages/checkoutPage/checkoutPage';
import Auth from './pages/authentication/authentication.component'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<HomePage/>}/>
        <Route path='shop' element={<ShopPage/>}/>
        <Route path='auth' element={<Auth/>}/>
        <Route path='checkout' element={<CheckoutPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
