import React from "react";
import ReactDOM from "react-dom";
import "./Window.css";
import { useSelector, useDispatch } from "react-redux";
import Draggable from "react-draggable";
import TopBar from "../TopBar/TopBar";
import { setStart, setTop } from "../../redux/actions";
import PdfViewer from "../PdfViewer/PdfViewer";
import Notepad from "../Notepad/Notepad";
import GalleryList from "../GalleryList/GalleryList";

const Window = ({ app }) => {
  const dispatch = useDispatch();
  const screenBounds = {
    left: 0,
    top: 0,
    right: window.innerWidth,
    bottom: window.innerHeight,
  };

  const styling = {
    zIndex: useSelector((state) => state.top)[0] === app.name ? "1" : "0",
    display: app.minimize ? "none" : "block",
  };

  const initialPosition = {
    x: app.name === "Resume.pdf" ? window.innerWidth / 6 : window.innerWidth / 2,
    y: app.name === "My Achievements" ? window.innerHeight / 2 : window.innerHeight / 6,
  };

  const setAsTop = () => {
    dispatch(setTop(app.name));
    dispatch(setStart())
  };

  return ReactDOM.createPortal(
    <Draggable
      onMouseDown={() => setAsTop()}
      bounds={screenBounds}
      defaultPosition={initialPosition}
      handle="strong"
      cancel="button"
    >
      <div className="window-box" style={styling}>
        <strong className="cursor glass active">
          <TopBar name={app.name}></TopBar>
        </strong>
        <div className="content">
          {(() => {
            switch (app.name) {
              case "My Skills":
                return (
                  <Notepad></Notepad>
                );

              case "Resume.pdf":
                return (
                  <PdfViewer></PdfViewer>
                );

              case "My Achievements":
                return (
                  <>
                    <GalleryList></GalleryList>
                  </>
                );

              default:
                return null; // or any other default JSX content
            }
          })()}
        </div>
      </div>
    </Draggable>,
    document.body
  );
};

export default Window;
