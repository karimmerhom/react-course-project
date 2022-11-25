import './App.css';
import {Routes , Route} from 'react-router-dom';
import Header from './components/header/header.component'
import HomePage from './pages/homePage/HomePage';
import Auth from './pages/authentication/authentication.component'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Route>
    </Routes>
  );
}

export default App;
