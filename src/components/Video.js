import testVid from '../assets/video/video.mp4';

function Video(){
    return(
        <div className="video-placer">
            <video className="video-intro" autoplay controls loop>
            <source src={testVid} type="video/mp4"/>
           </video>
        </div>
    );
}

export default Video;