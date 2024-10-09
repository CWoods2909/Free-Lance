import * as React from 'react';
import Button from '@mui/material/Button';
import '../styles/Home.css';
import { Link } from 'react-router-dom';


export default function Home() {

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
          <Button variant="text" id='work-text-button'
            onClick={() => {
              const element = document.querySelector("#contact");
              element.scrollIntoView({
                behavior: "smooth"
              })}}>
              <i class="fa-regular fa-paper-plane" style={{fontSize:"1.5em"}}></i>
              <div id='work-text'>
                Work with us
              </div>
          </Button>
        </div>

        <div id="right-column-components">
          <div id="group-image">
            <img src="/images/new-image-2.png" alt="group working" style={{height: "100%", width:"100%" }}/>
          </div>
        </div>
      </div>
      <div className="bubble_logo">
        <div className="arrow_down expand_menu">
        <p>Scroll</p>
            <i className="fa-solid fa-angles-down"></i>
        </div>
      </div>
      </>
    )
  }
