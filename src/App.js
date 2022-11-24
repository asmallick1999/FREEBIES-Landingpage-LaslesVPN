import './App.css';
import NavBar from './Components/Header/NavBar';
import HeaderMain from './Components/Header/HeaderMain';
import Features from "./Components/Features/Features"
import ChoosePlan from './Components/ChoosePlan/ChoosePlan';
import GlobalNetwork from './Components/GlobalNetwork/GlobalNetwork';
import Testimonials from './Components/Testimonials/Testimonials';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeaderMain/>
      <Features/>
      <ChoosePlan/>
      <GlobalNetwork/>
      <Testimonials/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
