import './video.css'

const Video = () => {
  return (
    <div className='video'>
        <h1 className='clickhere9'>ALLES GUTE ZUM GEBURTSTAG, MEINE PUPPE</h1>
        <video src="https://res.cloudinary.com/dipanc1/video/upload/v1648792386/birthday_web_app/video_y82zhx.mp4" controls autoplay loop className='videoPlayer'></video>
        <h1 className='clickhere8'>Mein liebes Baby</h1>
    </div>
  )
}

export default Video