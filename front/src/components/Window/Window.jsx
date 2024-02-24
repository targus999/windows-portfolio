import React from "react";
import ReactDOM from "react-dom";
import "./Window.css";
import { useSelector, useDispatch } from "react-redux";
import Draggable from "react-draggable";
import TopBar from "../TopBar/TopBar";
import { setTop } from "../../redux/actions";
import PdfViewer from "../PdfViewer/PdfViewer";

const Window = ({ app }) => {
  const dispatch = useDispatch();
  const screenBounds = {
    left: 0,
    top: 0,
    right: window.innerWidth,
    bottom: window.innerHeight,
  };

  const styling = {
    zIndex: useSelector((state) => state.top) === app.name ? "1" : "0",
    display: app.minimize ? "none" : "block",
  };

  const initialPosition = {
    x: window.innerWidth / 4,
    y: window.innerHeight / 6,
  };

  const setAsTop = () => {
    dispatch(setTop(app.name));
  };

  return ReactDOM.createPortal(
    <Draggable
      onMouseDown={() => setAsTop()}
      bounds={screenBounds}
      defaultPosition={initialPosition}
      handle="strong"
    >
      <div className="window-box" style={styling}>
        <strong className="cursor glass active">
          <TopBar name={app.name}></TopBar>
        </strong>
        <div className="content">
          {(() => {
            switch (app.name) {
              case "My Expertise":
                return (
                  <>
                    <h1>EXP</h1>
                  </>
                );

              case "Resume.pdf":
                return (
                    <PdfViewer></PdfViewer>
                );

              case "My Hobbies":
                return (
                  <>
                    <h1>HOBBY</h1>
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
