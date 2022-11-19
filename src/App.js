import './App.css';
import {Routes , Route} from 'react-router-dom';
import Header from './components/header/header.component'
import HomePage from './pages/homePage/HomePage';
import SignIn from './components/sign-in/sign-in.component'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
