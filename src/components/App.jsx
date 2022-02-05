import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Time from "./Date";
import "../../public/styles.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleClick(event) {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });

    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
    // console.log("i was called clik");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>
          To-Do List
          <div className="time">
            <Time />
            <div>habib.</div>
          </div>
        </h1>
      </div>

      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button type="submit" onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem
              onChecked={deleteItem}
              id={index}
              key={index}
              text={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
