
function Video(){
    return(
        <div className="video-placer">
            <video className="video-intro" autoPlay loop>
            <source src="./assets/video/testIntro.mp4" type="video/mp4"/>
           </video>
        </div>
    );
}

export default Video;