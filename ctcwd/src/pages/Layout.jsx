import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {Outlet} from "react-router-dom";

export default function Layout() {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <>
    <div id='dashboard' style={{}}>
      {/* <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
        <KeyboardDoubleArrowDownIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to="/" underline="none">Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/portfolio" underline="none">Portfolio</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/contact" underline="none">Contact</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/about" underline="none">About Us</Link></MenuItem>
      </Menu> */}
    </div>
      <Outlet />
    </>
  );
}