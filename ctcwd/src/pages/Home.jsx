import * as React from 'react';
import Button from '@mui/material/Button';
import '../styles/Home.css';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function Home() {
    return (
      <>
      <div id='main-home'>

        <div id="left-column-components">
          <div id="company-name">
            <h1>Coast to Coast<br></br> web design</h1>
          </div>

          <div id="button-container">
          <Button variant="text"><a href="#aboutus">Meet the team</a></Button>
          <Button variant="text"><a href="#portfolio">Portfolio</a></Button>
          </div>
        </div>

        <div id="right-column-components">
          <div id="group-image">
            <img src="/images/groupPhoto.png" alt="group working" style={{height: "100%", width:"100%", paddingRight: "5%" }}/>
          </div>
          <Button variant="text" id='work-with-us'><a href="#contact">
          <SendOutlinedIcon />
          Work with us
          </a></Button>
        </div>
      </div>
      <div className="bubble_logo">
        <h1 className="arrow_down expand_menu">
            <i className="fa-solid fa-angles-down"></i>
        </h1>
      </div>
      </>
    )
  }
