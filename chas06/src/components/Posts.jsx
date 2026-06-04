import React from 'react';

export const Posts = ({ posts }) => {
    return(
        <div id="posts">

            {posts.length > 0 ? 
            <table border="1">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>

                <tbody>
                    {posts.map((post) => 
                        <tr key={post.id}>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    )}
                </tbody>
            </table> : 
            <h1>Loading...</h1> }
        </div>
    )
}