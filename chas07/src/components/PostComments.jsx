import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';

import axios from 'axios';
import {api} from './../config/properties';

export const PostComments = () => {
    const [postComments, setPostComments] = useState([]);

    let {postId} = useParams();

    useEffect(() => {
        axios.get(`${api}/comments?postId=${postId}`) // we use query so it gives all comments connected to the ID
            .then(result => setPostComments(result.data))
            .catch(error => alert(error.message))
    }, [])

    return(
        <div id="post-comments">
            {postComments.map(comment => {
                return(
                    <div key={comment.id}>
                        <h1>Comment: {comment.name}</h1>
                        <h2>Email: {comment.email}</h2>
                        <h3>Body:</h3><br/>
                        <p>{comment.body}</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}