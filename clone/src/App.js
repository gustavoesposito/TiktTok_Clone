import logo from './logo.svg';
import './App.css';
import video from  './video.mp4'
import {AiOutlineUserSwitch, AiFillHeart} from "react-icons/ai"
import {FaRegCommentDots} from "react-icons/fa"

function App() {

  const playVideo = ()=> {
      let video= document.getElementById('video')
      video.play();
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
          <div className='icons_bottom'>

          </div>
          <div className='icons-_right'>

          </div>

           </div>
    </div>
  );
}

export default App;
