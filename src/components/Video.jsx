import './video.css'
import video from './images/video.mp4'

const Video = () => {
  return (
    <div className='video'>
      <h1 className='clickhere9'>ALLES GUTE ZUM GEBURTSTAG, MEINE PUPPE</h1>
      <video src={video} controls autoplay loop className='videoPlayer'></video>
      <h1 className='clickhere8'>Mein liebes Baby</h1>
    </div>
  )
}

export default Video