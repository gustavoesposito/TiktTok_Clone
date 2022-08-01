import logo from './logo.svg';
import './App.css';
import video from  './video.mp4'
import {AiOutlineUserSwitch, AiFillHeart} from "react-icons/ai"
import {FaRegCommentDots} from "react-icons/fa"

function App() {

  const playVideo = ()=>{
      let video = document.getElementById('video')
      video.play();
  }
  return (
    <div className="App">
       <div className='box-video'>

          <div className='title-video'>
            <h3>@gustavoEsposito13</h3>
            <p>My cool video</p>

          </div>
          <video id='video' onClick={()=>playVideo()}>
            <source src={video} type="video/mp4"/>
          </video>
          <div className='icons-bottom'>
              <AiOutlineUserSwitch style={{fontSize:'30px',color:'white'}}></AiOutlineUserSwitch>
              <AiOutlineUserSwitch style={{fontSize:'30px',color:'white'}}></AiOutlineUserSwitch>
              <AiOutlineUserSwitch style={{fontSize:'30px',color:'white'}}></AiOutlineUserSwitch>

          </div>
          <div className='icons-right'>
            <AiOutlineUserSwitch style={{fontSize:'30px',color: 'white',margin:'8px 0'}}></AiOutlineUserSwitch>
            <AiFillHeart style={{fontSize:'30px',color:'red',margin:'8px 0'}}></AiFillHeart>
            <FaRegCommentDots style={{fontSize:'30px',color: 'white',margin:'8px 0'}}></FaRegCommentDots>

          </div>
         </div> 
    </div>
  );
}

export default App;
