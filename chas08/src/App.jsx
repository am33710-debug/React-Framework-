// App.jsx
import React,{useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { Todos } from './components/Todos';
import { Navigation } from './components/Navigation';
import { Gallery } from './components/Gallery';
import { Albums } from './components/Albums';

import './css/App.css';

import { GalleryContext } from './utils/GalleryContext';
import { AlbumContext } from './utils/AlbumContext';

export function App() {

  // const [todos, setTodos] = useState([]);
  // const [newTodo, setNewTodo] = useState('');
  // const [showCompleted, setShowCompleted] = useState(true);
  // const [editTodo, setEditTodo] = useState(null);

  // function addNewTodo() {
  //   if (newTodo.trim() !== '') {
  //     let newObj = {
  //       id: Math.ceil(Math.random() * 1000),
  //       text: newTodo,
  //       done: false,
  //     }
  //     setTodos([...todos, newObj]);
  //     setNewTodo('');
  //   }
  //   else {
  //     alert('No text added');
  //   }
  // }

  // function markDone(todo) {
  //   setTodos([...todos.map(item => item.id === todo.id ?
  //     {id: item.id, text: item.text, done: !item.done} : // ✅ was: item.done (never toggled)
  //     item
  //   )])
  // }

  // function deleteTodo(id) {
  //   setTodos([...todos.filter(item => item.id !== id)]);
  // }

  // function changeTodo(id, text) {
  //   setEditTodo({ id, text });
  // }

  // function cancelTodo() {
  //   setEditTodo(null);
  // }

  // function saveTodo() {
  //   if(editTodo) {
  //     setTodos([...todos.map(item => item.id === editTodo.id ? 
  //       {...item, text: editTodo.text} : item 
  //     )])
  //   }
  //   setEditTodo(null);
  // }

  // const displayDone = todos.filter(todo => todo.done).length;

  const [photos, setPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  function openPhoto(photo) {
    setSelectedImage(photo);
  }

  function closePhoto() {
    setSelectedImage(null);
  }

  // filter out the photo whose ID matches the given one - new array without that specific photo
  function deletePhoto(id) {
    setPhotos(photos.filter(photo => photo.id !== id)); 
    setSelectedImage(null);
  }

  useEffect(() => {
    axios.get('https://picsum.photos/v2/list')
      .then(result => setPhotos(result.data))
      .catch(error => alert(error.message))
  }, [])

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(result => setAlbums(result.data))
      .catch(error => alert(error.message))
  })

  return(
    <div id="app">
      <Navigation/>

      {/* <h3>Number of Completed Todos: {displayDone}</h3>
      <button onClick={() => {setShowCompleted(!showCompleted)}}>{showCompleted ? "Hide Completed Items" : "Show Completed Items"}</button>
      <br/><br/><br/>

      <input
        type="text"
        placeholder="Your To-do Here"
        value={newTodo}
        onChange={(e) => { setNewTodo(e.target.value) }}
      />
      <button onClick={addNewTodo}>Add To-Do</button> */}

        {/* <Route path='/todos' element={<Todos 
          listOfTodos={showCompleted ? todos : todos.filter(todo => !todo.done)} 
          markDone={markDone} 
          deleteTodo={deleteTodo}
          changeTodo={changeTodo}
          cancelTodo={cancelTodo} 
          saveTodo={saveTodo}
          editTodo={editTodo}   
        />}
        />  <-- Wrap these in <Routes></Routes>*/}

        <GalleryContext.Provider value={{ photos, selectedImage, openPhoto, closePhoto, deletePhoto }}>
          <AlbumContext.Provider value={{ albums }}>
            <Routes>
              <Route path="/gallery" element={<Gallery/>}/>
              <Route path="/albums" element={<Albums/>}/>
            </Routes>
          </AlbumContext.Provider>
        </GalleryContext.Provider>

      {/* What Context is and how it works:
          Instead of doing prop drilling - passing a lot of properties around in components which gets messy
          Context is a way to "teleport" data directly 
          It works by:
          Creating an empty(null) container/context
          Then with .Provider we wrap it around the code and pass the properites in value={{property}}
          Now using this, we can call them in the component as: const { propertyName } = useContext(contextName)
          So in this scenario, with Albums we have:
          App.jsx fetches album fro Public API, stores them in a state and puts them in the AlbumContext value
          then Album.jsx takes them from useContext(gets them directly) and maps over them
          Everything has 0 props now
      */}
    </div>
  )
}