import "./App.css";
import Routing from "./routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
// import HomePage from "./view/HomePage";
import "antd/dist/antd.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
