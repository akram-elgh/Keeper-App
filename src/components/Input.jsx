import react, { useState } from "react";

function Input(props) {
  const [fullInput, setFullInput] = useState({
    title: "",
    body: "",
  });
  const { title, body } = fullInput;
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
    <div class="input-note">
      <input
        onChange={handleChange}
        type="text"
        className="input-header"
        placeholder="Title"
        value={title}
        name="title"
      />
      <br />
      <input
        onChange={handleChange}
        type="text"
        className="input-body"
        placeholder="Take a note..."
        value={body}
        name="body"
      />
      <button
        onClick={() => {
          props.click(fullInput);
          setFullInput({ title: "", body: "" });
        }}
        className="btn-add"
      >
        Add
      </button>
    </div>
  );
}

export default Input;
