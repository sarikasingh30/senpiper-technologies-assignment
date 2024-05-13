import './App.css';
import { MainSection } from './components/MainSection/MainSection';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainSection/>
      <Footer/>
    </div>
  );
}

export default App;