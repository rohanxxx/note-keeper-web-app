import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./Create_Area";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  // Fetch notes from the backend when the component mounts
  useEffect(() => {
    fetchNotes();
  }, []);

  // Function to fetch notes from the backend
  const fetchNotes = () => {
    axios.get("https://final-project-backend-rql5.onrender.com/notes")
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error("Error fetching notes:", error);
      });
  };

    // Function to add a new note
    const addNote = (newNote) => {
      axios.post("https://final-project-backend-rql5.onrender.com/notes", newNote)
        .then(response => {
          fetchNotes(); // Fetch updated notes after adding
        })
        .catch(error => {
          console.error("Error adding note:", error);
        });
    };
  // Function to delete a note
  const deleteNote = (id) => {
    axios.delete(`https://final-project-backend-rql5.onrender.com/notes/${id}`)
      .then(response => {
        fetchNotes(); // Fetch updated notes after deletion
      })
      .catch(error => {
        console.error("Error deleting note:", error);
      });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={note._id} // Assuming _id is the unique identifier
          id={note._id} // Assuming _id is the unique identifier
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
