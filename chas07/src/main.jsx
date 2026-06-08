import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import { App } from './App.jsx'

import { Navigation } from './components/Navigation';
import { Posts } from './components/Posts';
import { Todos } from './components/Todos';
import { Comments } from './components/Comments';
import { CommentDetails } from './components/CommentDetails.jsx';
import { PostComments } from './components/PostComments.jsx';

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  // Outlet -> child of the parent route: posts/todos are the children of parent App
  // so in this case, if we want to call posts/todos, we do so through <Outlet/> not <Route>
  <Router>
    <Routes>
      <Route path='/' element={(<App/>)}>
        <Route path='/posts' element={(<Posts/>)}/>
        <Route path='/todos' element={(<Todos/>)}/>
        <Route path="/comments" element={(<Comments/>)}/>
        <Route path="/comment/:commentId" element={(<CommentDetails/>)}/>
        <Route path="/post/:postId" element={(<PostComments/>)}/>
      </Route>
    </Routes> 
  </Router>
)
