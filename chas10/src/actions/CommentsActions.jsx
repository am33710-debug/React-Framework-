import { FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAIL } from './../constants/CommentsConstants';
import axios from 'axios';
 
export const fetchCommentsSuccess = (comments) => { //Array(500) <- comments
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}
 
export const fetchCommentsFail = (error) => { //alert na error - ot
    return {
        type: FETCH_COMMENTS_FAIL,
        payload: error
    }
}
 
export const fetchCommentsRequest = () => {
    return dispatch => {
        axios.get('http://jsonplaceholder.typicode.com/comments')
            .then(result => dispatch(fetchCommentsSuccess(result.data))) //setState(res.data)
            .catch(err => dispatch(fetchCommentsFail(err.message)))
    }
}