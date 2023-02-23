import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.click(props.id);
        }}
        className="delete-note"
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
