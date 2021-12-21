import './App.css';
import Header from './components/Header/Header';
import Popular from './components/Popular/Popular';
import Brand from './components/Brand/Brand';
import Mainscreen from './components/Mainscreen/Mainscreen';
import Footer from './components/Footer/Footer';
import Newcomer from './components/Newcomer/Newcomer';

function App() {

  return (
    <div>
      <Header/>
      <Mainscreen/>
      <Popular/>
      <Brand/>
      <Newcomer/>
      <Footer/>
    </div>
  );
}

export default App;
