
import './App.css';
import NowPlaying from './Pages/NowPlaying';
import Popular from './Pages/Popular';
import TopRated from './Pages/TopRated';
import UpComing from "./Pages/UpComing";



function App() {
  


  return (
    <div className='bes' >
      <div className='div'>
      <UpComing/>
      <NowPlaying/>
      <TopRated/>
      <Popular/>
      
      </div>
    </div>
  );
}

export default App;
