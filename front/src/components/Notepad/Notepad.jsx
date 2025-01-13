import React, { useEffect, useState } from "react";

const Notepad = () => {
  const [text, setText] = useState();
   
    // Load the text from the txt file when the component mounts
    useEffect(() => {
      fetch("/documents/skills.txt") // Path to the file inside public folder
        .then((response) => response.text()) // Read the file as text
        .then((data) => setText(data)) // Set the content into the state
        .catch((error) => console.error("Error loading file:", error));
    }, []);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ width: "700px", height: "500px" }}>
      <ul role="menubar">
        <li role="menuitem" tabIndex="0">
          File
        </li>
        <li role="menuitem" tabIndex="0">
          Edit
        </li>
        <li role="menuitem" tabIndex="0">
          View
        </li>
        <li role="menuitem" tabIndex="0">
          Help
        </li>
      </ul>
      <textarea
        value={text}
        onChange={handleChange}
        style={{
          width: "100%",
          height: "94%",
          fontFamily: "Courier New, monospace",
          fontSize: "14px",
          padding: "10px",
          boxSizing: "border-box",
          resize: "none",
        }}
      />
    </div>
  );
};

export default Notepad;
