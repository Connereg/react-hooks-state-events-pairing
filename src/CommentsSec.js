import React, { useState } from "react";

function CommentsSec(props){
    const { videoComments,
            handleAddComment,
            commentsVisible,
            handleCommentsVisible,
            ColoredLine,
            color
         } = props;
    
    const userComment = videoComments.map((userC) => {
    if (commentsVisible){
        return(   
            <> 
                <h4>{userC.user}</h4>
                <p>{userC.comment}</p>
                <br/> 
            </>
            )}
    else {
        return(
            null
        )
    }
    })

    return(
        <div>
            <button className={"show-hide-comments"} onClick={handleCommentsVisible}>
                Show/ Hide Comments
            </button>
            {ColoredLine(color)}
            <h3>{videoComments.length} Comments</h3>
            {userComment}
        </div>
    )
}

export default CommentsSec;