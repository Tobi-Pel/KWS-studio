import './global.css'
import Header from './components/Header/Header';
import HeroBlock from './components/HeroBlock/HeroBlock';
import AboutSection from './components/AboutSection/AboutSection';

function App() {
  return (
    <div className="App">
      <div className='header-collector'>
        <Header /> 
        <HeroBlock />
      </div>
      <AboutSection />
      
    </div>
  );
}

export default App;
