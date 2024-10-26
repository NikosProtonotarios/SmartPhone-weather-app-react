import './App.css';
import Camera from './components/camera';
import Input from './components/input';
import Time from './components/time';
import WeatherDisplay from './components/weatherDisplay';
import Footer from './components/footer';
import Wind from './components/wind';

function App() {
  return (
    <div className='MainContainer'>
      <div className="App">
          <Camera />
          <Time />
          <WeatherDisplay />
          <Input />
          <Wind />
          <Footer />
      </div>
    </div>
  );
}

export default App;