import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {api} from './../config/properties';
import {Link} from 'react-router-dom';

export const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`${api}/comments`)
            .then(result => setComments(result.data))
            .catch(error => alert(error.message))
    }, []) // this can be done in a single Effect, no need for a separate function
    // [] - componentDidMount - called only once
    // [if some element is here] - is called only when that element in there is changed
    // if no [] we get a infinite loop

    async function deleteComment(id) {
        const deletedItem = await axios.delete(`${api}/comments/${id}`);
        alert("DELETE STATUS:" + deletedItem.status);
        setComments([...comments.filter(comment => comment.id !== id)]); // "save" the change (to array here)
        // in a real scenario, here we have GET (axios.get) - separate function better to be called here
    }

    return(
        <div id="comments">
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {comments.map(comment => {
                        return(
                            <tr key={comment.id}>
                                <td>{comment.id}</td>
                                <td>{comment.name}</td>
                                <td>{comment.email}</td>
                                <td>{comment.body.substring(0,50)}...<Link to={'/comment/' + comment.id}>More</Link></td>
                                <td>
                                    <button onClick={() => {deleteComment(comment.id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}