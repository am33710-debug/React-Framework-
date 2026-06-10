// Todos.jsx
import React from 'react';

export const Todos = ({ listOfTodos, markDone, deleteTodo, changeTodo, cancelTodo, saveTodo, editTodo }) => { // ✅ added editTodo, cancelTodo was unused
    return(
        <div id='todos'>
            {listOfTodos.length > 0 ? <table border={1}> {/* ✅ was: listOfTodos > 0 */}
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Text</th>
                        <th>Done</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {listOfTodos.map((todo) => {
                        return(
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>
                                    {editTodo && editTodo.id === todo.id ?
                                    <input
                                        type="text"
                                        value={editTodo.text}
                                        onChange={(e) => {changeTodo(todo.id, e.target.value)}}
                                    /> :
                                    todo.text    
                                }
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        value={todo.done}
                                        checked={todo.done}
                                        onChange={() => markDone(todo)}
                                    />
                                </td>
                                <td> {/* ✅ was: buttons as direct children of <tr> */}
                                    {editTodo && editTodo.id === todo.id ? <>
                                        <button onClick={saveTodo}>Save</button>
                                        <button onClick={cancelTodo}>Cancel</button> {/* ✅ was: onClick={() => } */}
                                    </> :
                                    <>
                                        <button onClick={() => deleteTodo(todo.id)}>Delete</button> {/* ✅ was: onClick={deleteTodo} */}
                                        <button onClick={() => changeTodo(todo.id, todo.text)}>Edit</button> {/* ✅ was: onClick={editTodo} */}
                                    </>
                                    }
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> :
            <h3>No items added in Array!</h3>}
        </div>
    )
}