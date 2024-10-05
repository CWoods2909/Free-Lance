import * as React from 'react';
import Button from '@mui/material/Button';
import '../styles/Home.css';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Link } from 'react-router-dom';
// import { useRef } from 'react';

export default function Home({homeSection, aboutusSection, portfolioSection}) {

    return (
      <>
      <div id='main-home'>
        <div id="left-column-components">
          <div id="company-name">
            <h1>Coast to Coast<br></br> Web Design</h1>
          </div>

          <div id="button-container">
          <Button variant="text" 
            onClick={() => {
              const element = document.querySelector("#aboutus");
              element.scrollIntoView({
              behavior: "smooth"
            })}}>
                <Link href='/'>Meet the team</Link>
          </Button>
          <Button variant="text" 
            onClick={() => {
              const element = document.querySelector("#portfolio");
              element.scrollIntoView({
              behavior: "smooth"
            })}}>
                <Link>Portfolio</Link>
          </Button>
          </div>
        </div>

        <div id="right-column-components">
          <div id="group-image">
            <img src="/images/groupPhoto.png" alt="group working" style={{height: "100%", width:"100%", paddingRight: "5%" }}/>
          </div>
          <Button variant="text" 
            onClick={() => {
              const element = document.querySelector("#contact");
              element.scrollIntoView({
              behavior: "smooth"
            })}}>
                <SendOutlinedIcon />
                Work with us
          </Button>
        </div>
      </div>
      <div className="bubble_logo">
        <p>Scroll down</p>
        <h1 className="arrow_down expand_menu">
            <i className="fa-solid fa-angles-down"></i>
        </h1>
      </div>
      </>
    )
  }
