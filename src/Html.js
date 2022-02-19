import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Html.css";

function Html() {
  const [showMenu, setMenu] = useState(true);
  return (
    <div className="htmlMain container-fluid vh-100 p-2">
      <div
        className="mainMenu"
        onClick={() => (!showMenu ? setMenu(!showMenu) : "")}
        style={{
          transform: !showMenu ? "translateX(-100%)" : "unset",
          backgroundColor: showMenu ? "unset" : "blue",
          cursor: !showMenu ? "pointer" : "unset",
        }}
      >
        <h1>HTML</h1>
      </div>
      <div className="mainCon ">
        <h1>Container</h1>
        <Button onClick={() => setMenu(!showMenu)}>
          {showMenu ? "Close Menu" : "Open Menu"}
        </Button>
      </div>
    </div>
  );
}

export default Html;
