import { useState } from "react";
import "./GalleryList.css";
import Gallery from "../Gallery/Gallery";

// Mock file list
const fileList = ["Certificates", "Hobbies"];

const GalleryList = () => {
    const [selected, setSelected] = useState(null); // Currently selected file
    const [openedFile, setOpenedFile] = useState(null); // File to open

    const openApp = (file) => {
        setOpenedFile(file); // Set the file to open
    };

    const handleIconClick = (file) => {
        setSelected(file); // Highlight the selected file
    };

    return (
        <div className="gallery-list">
            {/* File icons */}
            {fileList.map((file) => (
                <div className="inner-icon" key={file} onDoubleClick={() => openApp(file)}>
                    <div
                        className={`inner-desktop-icon ${selected === file ? "selected" : ""}`}
                        onClick={() => handleIconClick(file)}
                    >
                        <img src={`/images/gallery.webp`} alt={file} />
                        <p>{file}</p>
                    </div>
                </div>
            ))}

            {openedFile && <Gallery fileName={openedFile} setter={setOpenedFile}/>}
        </div>
    );
};

export default GalleryList;
