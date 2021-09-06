import React from 'react'

function VotesButtonsRender(props){
    const {
         className,
         videoUpvotes, 
         videoDownvotes, 
         onVideoUpvote, 
         onVideoDownvote} = props;

    function handleUpvotes(){
        onVideoUpvote(videoUpvotes + 1)
    }

    function handleDownvotes(){
        onVideoDownvote(videoDownvotes + 1)
    }

    return (   
        <div>
            <button className={className} onClick={handleUpvotes}>
            Upvotes: {videoUpvotes}
            </button>
            <button className={className} onClick={handleDownvotes}>
            Downvote: {videoDownvotes}
            </button> 
        </div>
    )
}
export default VotesButtonsRender;