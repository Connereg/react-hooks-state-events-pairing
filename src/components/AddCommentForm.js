import { useState } from "react";

function AddCommentForm(props){
    const { handleAddComment,
            videoComments,
            ColoredLine,
            color
                            } = props;

    const [addUsername, setAddUserName] = useState("");
    const [addComment, setAddComment] = useState("");

    function handleAddUsername(event) {
        setAddUserName(event.target.value)
    }

    function handleAddCommentText(event) {
        setAddComment(event.target.value)
    }

    function handleSubmitNewComment(event) {
        event.preventDefault();
        handleAddComment({
            id: (videoComments.length + 1),
            user: addUsername,
            comment: addComment
        })
        setAddUserName("")
        setAddComment("")
    }


    return (
        <>
        {ColoredLine(color)}
        <form className={"add-comment-form"} onSubmit={handleSubmitNewComment}>
            <label>
                Username:
                <input type="text" 
                        name="add-username-input" 
                        onChange={handleAddUsername} 
                        value={addUsername} />

            </label>
            <br />
            <label>
                Add Comment:
                <input type="text"
                        name="add-comment-text"
                        onChange={handleAddCommentText}
                        value={addComment} />
            </label>
            <br />
            <button type="submit">Add Comment!</button>
        </form>
        </>
    )

}

export default AddCommentForm;