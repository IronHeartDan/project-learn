import React from "react";
import "./Home.css";
import getStarted from "./assets/asset_getStarted.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="con">
        <img src={getStarted} alt="getStarted" className="getStarted" />
        <div>
          <Link to="/html">html</Link>
          <Link to="/css">css</Link>
          <Link to="/javascript">javascript</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
