import * as React from 'react';
import Button from '@mui/material/Button';
import CottageIcon from '@mui/icons-material/Cottage';
import {Outlet} from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {

  return (
    <>
    <div id='dashboard' style={{"display":"flex", "justifyContent": "end"}}>
      <Button
        id="basic-button"
        ><a className='home_button' href="#home" style={{"color": "white"}}><CottageIcon/></a>
      </Button>
    </div>
      <Outlet />
    </>
  );
}
