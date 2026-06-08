import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'; // React Hook

import axios from 'axios';

import {api} from './../config/properties';

export const CommentDetails = () => {
    const [details, setDetails] = useState({}) // holds the default display data (expanded comment)
    const [isEditing, setIsEditing] = useState(false);
    const [commentData, setCommentData] = useState({
        name: "",
        email: "",
        body: "",
    }); // holds the edited comment data (empty strings because we will catch e.target.name and change accordingly)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    let {commentId} = useParams(); // request.params.id (URL) -> what comes after url/:

    useEffect(() => {
        axios.get(`${api}/comments/${commentId}`)
            .then(result => {
                setDetails(result.data);
                setCommentData(result.data); // when editing mode is enable, we have the entire text, not empty
            })
            .catch(error => alert(error.message))
    }, [commentId])

    function editComment(e) {
        setCommentData({
            ...commentData,
            [e.target.name]: e.target.value,
        })
    }

    async function saveEditedComment() {
        setIsLoading(true); // loading after editing 
        try {
            const newComment = await axios.put(`${api}/comments/${commentId}`, commentData);
            if (newComment.status === 200) 
                alert("UPDATE STATUS: OK");
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false); // So Loading... dissapears and UI switches to default
        }
    }

    return(
        <div id="comment-details">
            <h1>Comment Details:</h1>
            <h2>Comment ID: {details.id}</h2>
            <hr/>
            
            {/*Logic:
                if isEditing is true, and input name="name/email" we enable input in that field
                if name="body" we assign a text area as it's bigger
                Both cases call the editComment function as it changes data according to the name value
                Then after this, in edit mode, we have a button for saving changes (accordingly)
            */}
            <h3>
                {isEditing ?
                <input
                    name="name"
                    value={commentData.name}
                    onChange={editComment}
                /> :
                details.name}
            </h3>

            <p>
                {isEditing ?
                <input
                    name="email"
                    value={commentData.email}
                    onChange={editComment}
                /> :
                details.email}
            </p>

            <p>
                {isEditing ?
                <textarea name="body" value={commentData.body} onChange={editComment}
                 style={{ width: 500, height: 300}}/> :
                details.body}
            </p>

            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            {isEditing ?
            <button onClick={saveEditedComment}>Save</button> :
            <button onClick={() => setIsEditing(true)}>Edit Comment</button>}

            {/* Bug: 
                When i click edit comment, and i edit, then click Save, i get alert
                and Loading.. dissapears, but when i can still change inputs and the button
                doesn't revert back to Edit Comment
            */}
        </div>
    )
}