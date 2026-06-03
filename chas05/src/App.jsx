import React, { useState } from "react";
import { ElementTable } from "./components/ElementTable";

export function App() {
  const [element, setElement] = useState(""); // element added in put through the button
  const [items, setItems] = useState([]); // element is added in this array
  const [showTable, setShowTable] = useState(false); // state for the table (whether to show it or not)
  const [showCompleted, setShowCompletedOnly] = useState(false);

  function addItem() {
    if (element.trim() === "") return; // check for blanks

    // if input not a blank, add a new item which follows this pattern/schema
    const newItem = {
      id: Math.floor(Math.random() * 100), // 0-99 range (not unique)
      item: element,
      completed: false,
      isEditing: false,
    }; 

    setItems([...items, newItem]); // add it to the array 
    setElement(""); // reset the element variable
  }

  // function to change the state of the table: T -> F and vice versa
  function toggleTable() {
    setShowTable(!showTable); 
  }

  // function to change the state of the bool variable which decides whether all or only completed are shown
  function toggleCompleted() {
    setShowCompletedOnly(!showCompleted);
  }

  return (
    <div id="app">
      <input
        type="text"
        placeholder="Enter Element"
        value={element}
        onChange={(e) => setElement(e.target.value)}
      />

      <button type="button" onClick={addItem}>
        Add Element
      </button>

      <button type="button" onClick={toggleTable}>
        { showTable ? "Hide Table" : "Show Table" }
      </button>

      {items.length === 0 ? (
        <h2>No Items Added To Array yet!</h2>
      ) : (
        <h2>Number of Items: {items.length}</h2>
      )}

      { showTable && (
        <>
          <ElementTable
            items={items}
            setItems={setItems}
            showCompleted={showCompleted}
          />

          <button type="button" onClick={toggleCompleted}>
            { showCompleted ? "Show All Items" : "Show Completed Only" }
          </button>
        </>
      )}
    </div>
  );
}