import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Imgs from './components/img';
import Inputs from './components/Inputs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Imgs/>
      <Inputs/>
      <Footer/>
    </div>
  );
}

export default App;
