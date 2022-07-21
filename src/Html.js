import { Avatar, Button, CircularProgress, Switch } from "@mui/material";
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
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { Offcanvas } from "react-bootstrap";

function Html() {
  const [showMenu, setMenu] = useState(false);
  const [showMiniMenu, setMiniMenu] = useState(false);
  const [showOutput, setOutput] = useState(false);
  const [loading, setLoading] = useState(false);

  const lineConRef = useRef();
  const inputRef = useRef();
  const outputRef = useRef();

  const addLine = (e) => {
    let elem = e.target;

    // let scrollHeight = elem.scrollHeight;
    // elem.style.height = `${scrollHeight}px`;

    let numberOfLines = elem.value.split("\n").length;

    lineConRef.current.innerHTML = Array(numberOfLines)
      .fill("<span></span>")
      .join("");

    elem.style.height = `${lineConRef.current.clientHeight}px`;
  };

  const runCode = (e) => {
    setLoading(true);
    setTimeout(() => {
      let val = inputRef.current.value;
      if (!val.length > 0) {
        alert("Please Enter Code");
        setLoading(false);
        return;
      }

      let iframe = outputRef.current;

      var iframedoc = iframe.document;
      if (iframe.contentDocument) iframedoc = iframe.contentDocument;
      else if (iframe.contentWindow) iframedoc = iframe.contentWindow.document;
      iframedoc.open();
      iframedoc.writeln(val);
      iframedoc.close();
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="htmlMain container-fluid  p-2">
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
                  <Offcanvas.Title>
                    <h1>HTML</h1>
                    <small>Hyper Text Markup Language</small>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="menuCon">
                    <h4>Introduction</h4>
                    <ul>
                      <li>
                        <p>Heading</p>
                      </li>
                      <li>
                        <p>Paragraph</p>
                      </li>
                      <li>
                        <p>Font</p>
                      </li>
                      <li>
                        <p>Color</p>
                      </li>
                      <li>
                        <p>Select</p>
                      </li>
                      <li>
                        <p>Transform</p>
                      </li>
                    </ul>
                  </div>
                  <div className="menuCon">
                    <h4>Skeleton</h4>
                    <ul>
                      <li>
                        <p>HTML STUFF</p>
                      </li>
                      <li>
                        <p>Attributs</p>
                      </li>
                      <li>
                        <p>Font</p>
                      </li>
                      <li>
                        <p>Color</p>
                      </li>
                      <li>
                        <p>Select</p>
                      </li>
                      <li>
                        <p>Transform</p>
                      </li>
                    </ul>
                  </div>
                  <div className="menuCon">
                    <h4>Containers</h4>
                    <ul>
                      <li>
                        <p>Heading</p>
                      </li>
                      <li>
                        <p>Paragraph</p>
                      </li>
                      <li>
                        <p>Font</p>
                      </li>
                      <li>
                        <p>Color</p>
                      </li>
                      <li>
                        <p>Select</p>
                      </li>
                      <li>
                        <p>Transform</p>
                      </li>
                    </ul>
                  </div>
                  <div className="menuCon">
                    <h4>Typography</h4>
                    <ul>
                      <li>
                        <p>Heading</p>
                      </li>
                      <li>
                        <p>Paragraph</p>
                      </li>
                      <li>
                        <p>Font</p>
                      </li>
                      <li>
                        <p>Color</p>
                      </li>
                      <li>
                        <p>Select</p>
                      </li>
                      <li>
                        <p>Transform</p>
                      </li>
                    </ul>
                  </div>
                  <div className="menuCon">
                    <h4>Media</h4>
                    <ul>
                      <li>
                        <p>Heading</p>
                      </li>
                      <li>
                        <p>Paragraph</p>
                      </li>
                      <li>
                        <p>Font</p>
                      </li>
                      <li>
                        <p>Color</p>
                      </li>
                      <li>
                        <p>Select</p>
                      </li>
                      <li>
                        <p>Transform</p>
                      </li>
                    </ul>
                  </div>
                  <div className="menuCon">
                    <h4>Navigation</h4>
                    <ul>
                      <li>
                        <p>Heading</p>
                      </li>
                      <li>
                        <p>Paragraph</p>
                      </li>
                      <li>
                        <p>Font</p>
                      </li>
                      <li>
                        <p>Color</p>
                      </li>
                      <li>
                        <p>Select</p>
                      </li>
                      <li>
                        <p>Transform</p>
                      </li>
                    </ul>
                  </div>
                </Offcanvas.Body>
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

        <div className="mainBody p-md-2">
          <div className="mainBodyCon">
            <div
              className={showOutput ? "bodyContent" : "bodyContent p-2"}
              style={{
                width: showOutput ? "0" : "calc(40% - 10px)",
                opacity: showOutput ? 0 : 1,
              }}
            >
              <h1 className="bodyTitle">Introduction</h1>
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
            <div
              className="codeCon"
              style={{
                width: showOutput ? "calc(50% - 10px)" : "calc(60% - 10px)",
              }}
            >
              <div className="commands">
                <Switch onChange={(e) => setOutput(e.target.checked)} />
                {showOutput ? (
                  <Button>
                    {loading ? (
                      <CircularProgress
                        hidden={!loading}
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    ) : (
                      <PlayArrowIcon onClick={runCode} />
                    )}
                  </Button>
                ) : (
                  <></>
                )}
              </div>
              <div className="editor">
                <div className="line-numbers" ref={lineConRef}>
                  <span></span>
                </div>
                <textarea onKeyUp={addLine} ref={inputRef}></textarea>
              </div>
            </div>
            <div
              className="resCon"
              style={{
                width: showOutput ? "calc(50% - 10px)" : "0",
              }}
            >
              <iframe ref={outputRef}></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Html;
