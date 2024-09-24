import * as React from 'react';
import Button from '@mui/material/Button';

export default function Home() {
    return (
      <>
      <div id='main-home'>

      <div id="left-column-components">
        <div id="company-name">
          <h1>Coast to Coast web design</h1>
        </div>

        <div id="button-container">
        <Button variant="text">Meet the Team</Button>
        <Button variant="text">Portfolio</Button>
        </div>
      </div>

      <div id="right-column-components">
        <div id="group-image">
          <img src="../../public/images/groupPhoto.png" alt="group working" />
        </div>
        <Button variant="text">Work with us</Button>
      </div>
      </div>
      </>
    )
  }