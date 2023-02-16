import react, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function Input(props) {
  const [fullInput, setFullInput] = useState({
    title: "",
    body: "",
  });
  const [isClicked, setClicked] = useState(false);
  const { title, body } = fullInput;
  function handleClick() {
    setClicked(!isClicked);
  }
  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setFullInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          type="text"
          // className="input-header"
          placeholder="Title"
          value={title}
          name="title"
          style={{ display: isClicked ? "" : "none" }}
        />
        <br />
        <textarea
          onClick={handleClick}
          onChange={handleChange}
          type="text"
          // className="input-body"
          placeholder="Take a note..."
          value={body}
          name="body"
          rows={isClicked ? 3 : 1}
        />
        <Zoom in={isClicked}>
          <Fab
            onClick={(event) => {
              props.click(fullInput);
              setFullInput({ title: "", body: "" });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Input;
