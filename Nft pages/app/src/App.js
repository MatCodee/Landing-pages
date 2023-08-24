import './App.css';

import Home from "./components/Home";
import Clients from "./components/Clients";
import CreateAndSell from './components/CreateAndSell';
import Choose from './components/Choose'; 
import MarketPlace from './components/MarketPlace';
import Subscribe from './components/Subcribe';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Home/>
      <Clients />
      <Choose />
      <MarketPlace/>
      <Subscribe/>

      <Footer/>
    </div>
  );
}



export default App;
