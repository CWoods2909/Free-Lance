import * as React from 'react';
import Button from '@mui/material/Button';
import CottageIcon from '@mui/icons-material/Cottage';
import {Outlet} from "react-router-dom";

export default function Navbar() {

  return (
    <>
    <div id='dashboard' style={{"display":"flex", "justifyContent": "end"}}>
      <Button
        id="basic-button"
        ><a href="#home" style={{"color": "white"}}><CottageIcon/></a>
      </Button>
    </div>
      <Outlet />
    </>
  );
}
