import './global.css'
import Header from './components/Header/Header';
import HeroBlock from './components/HeroBlock/HeroBlock';

function App() {
  return (
    <div className="App">
      <div className='main-collector'>
        <Header /> 
        <HeroBlock />
      </div>
    </div>
  );
}

export default App;
