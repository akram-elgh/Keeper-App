import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
// import notes from "../notes";
import Input from "./Input";
function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, { title: newNote.title, body: newNote.body }];
    });
  }
  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header></Header>
      <Input click={addNote} />
      {notes.map((note, index) => (
        <Note
          click={deleteNote}
          key={index}
          id={index}
          title={note.title}
          content={note.body}
        />
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;
