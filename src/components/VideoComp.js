import VotesButtonsRender from './VotesButtons';


function VideoComp (props) {
    const {
        videoData,
        videoUpvotes, 
        videoDownvotes,
        setVideoUpvotes,
        setVideoDownvotes
    } = props;

    const videoObject = {
        videoSource : videoData.embedUrl,
        videoName : videoData.title,
        videoViews : videoData.views,
        uploadDate : videoData.createdAt
    }
    
    const votesButtons = (
        <VotesButtonsRender
            className={"voteButton"}
            videoUpvotes={videoUpvotes}
            videoDownvotes={videoDownvotes}
            onVideoUpvote={setVideoUpvotes}
            onVideoDownvote={setVideoDownvotes}
             
        />
    )
    
    return(
    <div>
        <iframe
            width="919"
            height="525"
            src={videoObject.videoSource}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
        />
        <h2 className={"video-component-name"}>{videoObject.videoName}</h2>
        <p className={"video-views-and-upload"}>{videoObject.videoViews} Views || Uploaded {videoObject.uploadDate}</p>
        {votesButtons}        

    </div>
    )
}

export default VideoComp;