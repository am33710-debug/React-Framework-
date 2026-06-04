import React,{useState,useEffect} from 'react';

export const Todos = () => {
    const [todos, setTodos] = useState([]);

    function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(result => result.json())
      .then(json => setTodos(json))
      .catch(error => alert(error))
   }

    useEffect(() => {
        setTimeout(() => {getTodos()}, 1000)
    }, []) // every 1s check for new Todos, and if componentDidMount - []

    // function which maps the array and when the ids are matched, return a copy with completed flipped,
    // other elements are unchanged
    function toggleCompleted(id) {
        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ))
    }
    
    return(
        <div id="todos">
            { todos.length > 0 ? 
            <ul>
                {todos.map((todo) => 
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleCompleted(todo.id)}
                        />

                        <label>{todo.title}</label>
                    </li>
                )}
            </ul> :
            <h1>Loading...</h1> }
        </div>
    )
}