import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Myheader from './Components/Myheader';
import Myslider from './Components/Myslider';
import Work from './Components/Work';
import What from './Components/What';
import Ready from './Components/Ready';
import Myfooter from './Components/Myfooter';
import Simplicity from './Components/Simplicity';
import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect} from 'react';
import BackToTop from './Components/Comman/Backtotop';

function App() {
  useEffect (() => {
    Aos.init({duration:1500, once:true,});
  }, [])
  return (
    <div className=' overflow-hidden'>
      <BackToTop/>
     <Myheader/>
     <Myslider/>
     <Work/>
     <Simplicity/>
     <What/>
     <Ready/>
     <Myfooter/>
    </div>
  );
}

export default App;
