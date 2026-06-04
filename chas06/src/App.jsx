import React,{useState,useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { Home } from "./components/Home";
import { Posts } from "./components/Posts";
import { Todos } from "./components/Todos";
import { NotFound } from './components/NotFound';

export function App() {

  const [posts, setPosts] = useState([]);

  function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(result => result.json())
      .then(json => setPosts(json))
      .catch(error => alert(error))
  }

  useEffect(() => {
    setTimeout(() => {getPosts()}, 1000)
  }, []) // every 1s check for new Posts, and if componentDidMount - []

  return(
    <div id="app">
      <Navigation/>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/todos' element={<Todos/>}/>
        <Route path='/posts' element={<Posts posts={posts}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}