import { Avatar, Button } from "@mui/material";
import React, { useRef, useState } from "react";
import "./Html.css";

import logoBig from "./assets/logoBig.png";
import logoSmall from "./assets/logo.png";

import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import HomeIcon from "@mui/icons-material/Home";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import MenuIcon from "@mui/icons-material/Menu";
import { Offcanvas } from "react-bootstrap";

function Html() {
  const [showMenu, setMenu] = useState(false);
  const [showMiniMenu, setMiniMenu] = useState(false);
  const lineConRef = useRef();

  const addLine = (e) => {
    let numberOfLines = e.target.value.split("\n").length;
    console.log(numberOfLines);

    lineConRef.current.innerHTML = Array(numberOfLines)
      .fill("<span></span>")
      .join("");
  };

  return (
    <div className="htmlMain container-fluid vh-100 p-2">
      <div
        className="mainMenu p-2 d-none d-md-block"

        // style={{
        //   width: !showMenu ? "1%" : "20%",
        //   backgroundColor: showMenu ? "white" : "blueviolet",
        //   cursor: !showMenu ? "pointer" : "unset",
        // }}
      >
        <div className="logo"></div>
        <div className="opts">
          <ul>
            <li>
              <Offcanvas show={showMenu} onHide={() => setMenu(false)}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>HTML</Offcanvas.Title>
                </Offcanvas.Header>
              </Offcanvas>
              <Button onClick={() => setMenu(!showMenu)}>
                <MenuIcon />
              </Button>
            </li>
            <li>
              <Button>
                <HomeIcon />
              </Button>
            </li>
            <li>
              <Button>
                <LightModeIcon />
              </Button>
            </li>
            <li>
              <Button>
                <FullscreenIcon />
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="mainCon p-md-2 h-100">
        <div className="mainHeader p-2 w-100 d-flex align-items-center justify-content-between">
          <div className="progressBar">
            <div className="progressView">
              <span>50%</span>
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

        <div className="mainBody p-2">
          <div className="mainBodyCon p-5 row g-0">
            <div className="col-12 col-md-4 bodyContent p-2">
              <h1 className="bodyTitle">Body</h1>
              <div className="bodyImage d-flex align-items-center justify-content-center my-5">
                <img src={logoBig} alt="Figure" />
              </div>
              <ul>
                <li>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nemo alias perspiciatis, temporibus quam repellat cupiditate
                    molestias soluta debitis asperiores. Quas voluptatibus
                    quibusdam amet excepturi adipisci iure inventore odit illum
                    voluptates?
                  </p>
                </li>
                <li>
                  <p>
                    Animi, minus. Eius id voluptatibus perferendis ducimus ipsa
                    pariatur quas accusamus quos aspernatur autem, totam ut
                    repudiandae ipsam velit temporibus iste nam, voluptatem
                    reprehenderit, rerum explicabo beatae illo. Labore,
                    officiis.
                  </p>
                </li>
                <li>
                  <p>
                    Iste nobis delectus, earum modi accusamus eos? Molestiae
                    provident illo, facilis dolore optio quidem natus minima.
                    Beatae facilis id distinctio est magnam expedita incidunt,
                    eos provident repudiandae assumenda officiis corrupti.
                  </p>
                </li>
                <li>
                  <p>
                    Voluptatibus molestiae saepe laborum vero exercitationem
                    quod magnam fugiat, repellat id consequuntur modi
                    consequatur qui eos adipisci! Eos, optio ipsam aliquid earum
                    deserunt tenetur dolorum praesentium culpa! Sed, provident
                    aliquam!
                  </p>
                </li>
                <li>
                  <p>
                    Quia ipsum provident porro quos. Corporis facilis delectus
                    perferendis eos asperiores eum unde ipsam tempora dicta
                    repudiandae consequuntur, obcaecati possimus. Enim, est. Quo
                    harum pariatur fugit voluptatem repellendus, ipsam iure!
                  </p>
                </li>
                <li>
                  <p>
                    Ullam qui impedit aliquam asperiores assumenda ipsam
                    voluptatum, aperiam similique fugit officia alias debitis
                    provident dolorem illo praesentium earum? Distinctio
                    voluptate expedita, neque ea doloribus repellat excepturi
                    iure quam deleniti.
                  </p>
                </li>
                <li>
                  <p>
                    Eius porro harum vero explicabo expedita at nihil, laborum
                    consequuntur repellendus nulla illum dolore beatae ipsa
                    sapiente excepturi alias iste aspernatur adipisci, iusto
                    aliquid necessitatibus. Harum, delectus! Natus, accusamus
                    veniam.
                  </p>
                </li>
                <li>
                  <p>
                    Officia autem et cupiditate molestiae distinctio. Cum, amet
                    voluptate molestiae fuga laborum voluptatibus, magnam ipsam,
                    nostrum voluptatem quis impedit repellendus animi quisquam
                    aut saepe dolor quia nulla cumque quasi similique!
                  </p>
                </li>
                <li>
                  <p>
                    Harum explicabo nemo ipsum sint quaerat unde, non est facere
                    fuga beatae itaque. Rem numquam quidem dolor error minus
                    voluptas nihil et autem soluta? Corporis vel cum error
                    delectus porro!
                  </p>
                </li>
                <li>
                  <p>
                    Vitae totam exercitationem dignissimos architecto soluta
                    quidem, assumenda cumque, expedita porro beatae in alias
                    blanditiis cupiditate labore excepturi iure animi ullam
                    fugiat recusandae voluptatum, repellendus similique! Labore
                    aperiam deleniti voluptate.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md codeCon">
              <div className="editor">
                <div className="line-numbers" ref={lineConRef}>
                  <span></span>
                </div>
                <textarea onKeyUp={addLine}></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Html;
