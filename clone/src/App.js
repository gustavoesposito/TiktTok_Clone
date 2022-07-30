import logo from './logo.svg';
import './App.css';
import video from  './video.mp4'

function App() {

  const playVideo = ()=> {
    alert('tocando o vídeo');

  }
  return (
    <div className="App">
       <div className='box_video'>

          <div className='title_video'>
            <h3>@gustavoEsposito13</h3>
            <p>My cool video</p>

          </div>
          <video id='video' onClick={()=>playVideo()}>
            <source src={video} type="video/mp4"/>
          </video>
      </div>
    </div>
  );
}

export default App;
