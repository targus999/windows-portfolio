import "./App.css";
import "7.css/dist/7.css";
import TaskBar from "./components/TaskBar/TaskBar";
import { useDispatch, useSelector } from "react-redux";
import backgroundImage from "./flag.png";

import Window from "./components/Window/Window";
import DesktopIcons from "./components/DesktopIcons/DesktopIcons";
import { useEffect } from "react";
import { setSelected, setStart } from "./redux/actions";

function App() {
  const dispatch=useDispatch();
  const clear=()=>{
    dispatch(setStart());
    dispatch(setSelected(null))
  }
  useEffect(() => {
    const preventDefaultDrag = (event) => {
      event.preventDefault();
    };

    document.addEventListener("dragstart", preventDefaultDrag);
    document.body.style.userSelect = "none";
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("dragstart", preventDefaultDrag);
      document.body.style.userSelect = "";
    };
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    // Add more styles as needed
  };

  return (
    <div className="app-container" >
      <DesktopIcons></DesktopIcons>
      <div className="" style={backgroundStyle} onClick={()=>{clear()}}></div>
      <TaskBar></TaskBar>
      {useSelector((state) => state.apps)?.map(
        (i, key) => i.active && <Window key={key} app={i}></Window>
      )}
    </div>
  );
}

export default App;
