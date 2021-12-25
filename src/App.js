import './App.css';
import Header from './components/Header/Header';
import Popular from './components/Popular/Popular';
import Brand from './components/Brand/Brand';
import Mainscreen from './components/Mainscreen/Mainscreen';
import Footer from './components/Footer/Footer';
import Newcomer from './components/Newcomer/Newcomer';
import Login from './components/Login/Login';
import { Route , BrowserRouter, Routes } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';
import BurgerHidden from './components/BurgerHidden/BurgerHidden';



function App() {

  return (
    
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element= {<Login />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/BurgerHidden" element={<BurgerHidden />}/>
        </Routes>
        <Header/>
        <Mainscreen/>
        <Popular/>
        <Brand/>
        <Newcomer/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
