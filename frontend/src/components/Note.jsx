import React from "react";


// note file 
function Note(props) {
  function Click() {
    props.onDelete(props.id);
  }

  return (
    <div className = "note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={Click}>DELETE</button>
    </div>
  );
}



export default Note;
