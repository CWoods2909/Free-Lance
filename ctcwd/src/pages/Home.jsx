import * as React from 'react';
import Button from '@mui/material/Button';
import './Home.css';

export default function Home() {
    return (
      <>
      <div id='main-home'>

        <div id="left-column-components">
          <div id="company-name">
            <h1>Coast to Coast<br></br> web design</h1>
          </div>

          <div id="button-container">
          <Button variant="text">Meet the Team</Button>
          <Button variant="text">Portfolio</Button>
          </div>
        </div>

        <div id="right-column-components">
          <div id="group-image">
            <img src="/images/groupPhoto.png" alt="group working" style={{height: "60vh", paddingRight: "5%" }}/>
          </div>
          <Button variant="text">Work with us</Button>
        </div>
      </div>
      </>
    )
  }
