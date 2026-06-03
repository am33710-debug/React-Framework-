import React from "react";

export const ElementTable = ({ items, setItems, showCompleted }) => {
  // function to change the state of the completed checkbox: T - F and vice versa
  function toggleCompleted(id) {
    const updated = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updated); // update existing array (changes to array must be detected this way) - here we make a new one
  }

  // function for delete action 
  function deleteItem(id) {
    const filtered = items.filter((item) => item.id !== id);
    setItems(filtered); 
  }

  // function for edit action
  function editItem(id) {
    const updated = items.map((item) => 
    item.id === id ? {...item, isEditing: !item.isEditing} : item); // change value of isEditing
    setItems(updated); 
  }

  function updateText(id, newText) {
    const updated = items.map((item) =>
    item.id === id ? {...item, item: newText} : item); // change value of item (it's content)
    setItems(updated);
  }

  // this const variable holds all items
  const displayedItems = showCompleted ? items.filter((item) => item.completed) : items;
  // if showCompleted = true, show only the completed (filter function), if not, show all (items)

  return (
    <div id="table">
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {displayedItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>

              <td>
                {item.isEditing ? (
                  <input
                    value={item.item}
                    onChange={(e) =>
                      updateText(item.id, e.target.value)
                    }
                  />
                ) : (
                  item.item
                )}
              </td>

              <td>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleCompleted(item.id)}
                />
              </td>

              <td>
                <button onClick={() => editItem(item.id)}>
                  {item.isEditing ? "Save" : "Edit"}
                </button>

                <button onClick={() => deleteItem(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};