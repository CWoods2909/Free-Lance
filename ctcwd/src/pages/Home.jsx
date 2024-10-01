import * as React from 'react';
import Button from '@mui/material/Button';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
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
          <Button variant="text"><Link to="/about">Meet the team</Link></Button>
          <Button variant="text"><Link to="/portfolio">Portfolio</Link></Button>
          </div>
        </div>

        <div id="right-column-components">
          <div id="group-image">
            <img src="/images/groupPhoto.png" alt="group working" style={{height: "100%", width:"100%", paddingRight: "5%" }}/>
          </div>
          <Button variant="text" id='work-with-us'><Link to="/contact">
          <SendOutlinedIcon />
          Work with us
          </Link></Button>
        </div>
      </div>
      </>
    )
  }
