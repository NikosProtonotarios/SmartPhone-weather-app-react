import './App.css';
import Camera from './components/camera';
import Input from './components/input';

function App() {
  return (
    <div className='MainContainer'>
      <div className="App">
        <div className='cameraBorder'>
          <Camera />
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;