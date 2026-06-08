import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {api} from './../config/properties';

export const Todos = () => {
    const [todos, setTodos] = useState([]);

    function getTodos() {
        axios.get(`${api}/todos`)
            .then(result => setTodos(result.data))
            .catch(error => alert(error.message))
    }

    useEffect(() => {
        getTodos()
    }, [])

    function markAsDone(id) {
        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        )) // copy whole array, just flip values to the matched element (by ID)
    }

    return(
        <div id="todos">
            {todos.map(todo => {
                return(
                    <div key={todo.id}>
                        <p>{todo.title}</p>
                            <input
                                type='checkbox'
                                checked={todo.completed}
                                value={todo.completed}
                                onChange={() => markAsDone(todo.id)}
                            />
                    </div>
                )
            })}
        </div>
    )
}