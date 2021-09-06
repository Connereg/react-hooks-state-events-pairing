import video from "../data/video.js";
import React, { useState } from "react";
import VideoComp from "./VideoComp.js";
import CommentsSec from "../CommentsSec.js";
import AddCommentForm from "./AddCommentForm.js";


function App() {
  //console.log("Here's your data:", video);
  const [videoData, setVideoData] = useState(video)
  const [videoUpvotes, setVideoUpvotes] = useState(video.upvotes)
  const [videoDownvotes, setVideoDownvotes] = useState(video.downvotes)
  const [commentsVisible, setCommentsVisible] = useState(true)

  const [color, setColor] = useState('black')
  
  const [comments, setComments] = useState(video.comments)

  function handleAddComment(newComment){
    setComments([...comments, newComment])
  }

  function handleCommentsVisible(){
    setCommentsVisible(!commentsVisible)
  }

  const ColoredLine = ({ color }) => (
    <hr
        style={{
        color: color,
        backgroundColor: color,
        height: 5
        }}
    />
        );


  return (
    <div className="App">
      <h1> VIDEO LIKER APPLICATION </h1>
      <br />
      <VideoComp videoData={videoData}
       videoUpvotes={videoUpvotes}
       videoDownvotes={videoDownvotes}
       setVideoUpvotes={setVideoUpvotes}
       setVideoDownvotes={setVideoDownvotes} />
       
       <CommentsSec 
       videoComments={comments} 
       handleAddComment={handleAddComment}
       commentsVisible={commentsVisible}
       handleCommentsVisible={handleCommentsVisible}
       ColoredLine={ColoredLine}
       color={color} />

       <AddCommentForm
        handleAddComment={handleAddComment}
        videoComments={comments}
        ColoredLine={ColoredLine}
        color={color} />

    </div>
    
  );
}

export default App;
