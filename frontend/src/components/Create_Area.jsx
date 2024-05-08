import React, { useState } from "react";

// create the whole form box
function Create_Area(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function change(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return { ...prevNote, [name]: value };
    });
  }

  //submit note function
  function submit_note(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  //this is form for create notes
  return (
    <div>
      <form>
        {/* displays the title */}
        <input
          name="title"
          onChange={change}
          value={note.title}
          placeholder="Title"
          required
        />
        {/* displays the textarea */}
        <textarea
          name="content"
          onChange={change}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          required
        />
        {/* submit button on click */}
        <button onClick={submit_note}>Add</button>
      </form>
    </div>
  );
}

export default Create_Area;
