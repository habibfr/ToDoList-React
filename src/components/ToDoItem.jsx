import React, { useState } from "react";

function ToDoItem(props) {
  //   const [isClik, setIsClick] = useState(false);

  //   const styleIsClick = {
  //     textDecoration: "line-through",
  //     color: "grey"
  //   };

  //   const styleNone = {
  //     textDecoration: "none",
  //     fontSize: "30px"
  //   };

  //   function handleClick() {
  //     setIsClick((prevValue) => !prevValue);
  //   }

  return (
    <div
    // onClick={handleClick}
    >
      <li
        onClick={() => {
          props.onChecked(props.id);
        }}
        // style={{textDecoration: isClik ? "line-through" : "none"}}
        key={props.id}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
