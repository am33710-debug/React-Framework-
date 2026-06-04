import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return(
        <ul id="nav">
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/posts'>Posts</Link></li>
            <li><Link to='/todos'>Todos</Link></li>
        </ul>
    )
}