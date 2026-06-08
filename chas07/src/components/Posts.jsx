import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {api} from './../config/properties';
import { Link } from 'react-router-dom';

export const Posts = () => {
    const [posts, setPosts] = useState([]);
    
        function getPosts() {
            axios.get(`${api}/posts`)
                .then(result => setPosts(result.data))
                .catch(error => alert(error.message))
        }
    
        useEffect(() => {
            getPosts()
        }, [])
    
        return(
            <div id="posts">
                <table border="1">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {posts.map((post) => 
                            <tr key={post.id}>
                                <td>{post.userId}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td><button><Link to={`/post/${post.id}`}>Show Comments</Link></button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
}