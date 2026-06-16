import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchCommentsRequest} from '../actions/CommentsActions';

export const Comments = () => {

    const dispatch = useDispatch();
    const comments = useSelector(state=>state.CommentsReducer.comments);
    const error = useSelector(state=>state.CommentsReducer.error);

    useEffect(() => {
        dispatch(fetchCommentsRequest())
    }, [])

    return (
        <div id='comments'>
            <h2>Comments Amount: {comments.length}</h2>

            {comments.map(comment => {
                return(
                    <div key={comment.id}>
                        <p>Name: {comment.name}</p>
                        <p>Email: {comment.email}</p>
                        <p>Body: {comment.body}</p>
                        <hr/>
                    </div>
                )
            })}
            {error && <h1>{error}</h1>} 
        </div>
    )
}