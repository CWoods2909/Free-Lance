import * as React from 'react';
import Button from '@mui/material/Button';
// import CottageIcon from '@mui/icons-material/Cottage';
import {Outlet} from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {

  return (
    <>
    <div id='dashboard' style={{"display":"flex", 
      "justifyContent": "end", 
      position:"absolute", 
      zIndex:"100",
      right:0,
      }}>
      <Button variant="text" id="basic-button"
        onClick={() => {
          const element = document.querySelector("#home");
          element.scrollIntoView({
            behavior: "smooth"
          })}}>
          {/* <CottageIcon className='home_button' href="#home" style={{"color": "white"}}/> */}
          <img src="/images/logo3.png" alt="company logo" id='logo' style={{height: "10em", width: "10em"}}/>
      </Button>
    </div>
      <Outlet />
    </>
  );
}
