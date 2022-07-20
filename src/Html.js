import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Html.css";

import logoBig from "./assets/logoBig.png";
import logoSmall from "./assets/logo.png";

import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

function Html() {
  const [showMenu, setMenu] = useState(true);
  const [showMiniMenu, setMiniMenu] = useState(false);

  return (
    <div className="htmlMain container-fluid vh-100 p-2">
      <div
        className="mainMenu p-2"
        onClick={() => (!showMenu ? setMenu(!showMenu) : "")}
        style={{
          width: !showMenu ? "1%" : "20%",
          backgroundColor: showMenu ? "white" : "blueviolet",
          cursor: !showMenu ? "pointer" : "unset",
        }}
      ></div>
      <div className="mainCon p-2">
        <div className="mainHeader p-2 w-100 d-flex align-items-center justify-content-between">
          <div className="progressCon">
            <div className="progressBar">
              <div className="progressView">
                <span>50%</span>
              </div>
            </div>
          </div>
          {!showMiniMenu ? (
            <Avatar
              className="userAvatar"
              onClick={(e) => setMiniMenu(!showMiniMenu)}
            ></Avatar>
          ) : (
            <Avatar
              className="userAvatar"
              style={{
                backgroundColor: "red",
              }}
              onClick={(e) => setMiniMenu(!showMiniMenu)}
            >
              <CloseIcon />
            </Avatar>
          )}

          <ul
            className="userOpts"
            style={{
              transform: showMiniMenu
                ? "translateY(50%) scaleY(1)"
                : "translateY(50%) scaleY(0)",
            }}
          >
            <li>
              <AccountCircleIcon /> <span>Danish Khan</span>
            </li>
            <li>
              <SettingsIcon /> <span>Settings</span>
            </li>
            <li>
              <PowerSettingsNewIcon /> <span>Sign Out</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Html;
