import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import { useState } from "react";
import ContextStoreitems from "./store/ContextStoreitems";
import { Outlet } from "react-router-dom";


function App() {
  let [postitem, setpost] = useState("Home");

  return (
    <>
    <ContextStoreitems>
      <div className="side-container">
        <Sidebar postitem={postitem} setpost={setpost}></Sidebar>
        <div className="joint">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
      </ContextStoreitems>
    </>
  );
}

export default App;
