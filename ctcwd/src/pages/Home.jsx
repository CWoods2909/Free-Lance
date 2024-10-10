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
          <Button variant="text" id='meet-the-team-button'
            onClick={() => {
              const element = document.querySelector("#aboutus");
              element.scrollIntoView({
              behavior: "smooth"
            })}}>
                <Link href='/'>Meet the team</Link>
          </Button>
          <Button variant="text" id='portfolio-button'
            onClick={() => {
              const element = document.querySelector("#portfolio");
              element.scrollIntoView({
              behavior: "smooth"
            })}}>
                <Link>Portfolio</Link>
          </Button>
          <Button variant="text" id='get-in-touch-button'
            onClick={() => {
              const element = document.querySelector("#contact");
              element.scrollIntoView({
                behavior: "smooth"
              })}}>
              <i class="fa-regular fa-paper-plane" style={{fontSize:"1.5em"}}></i>
              <div id='work-text'>
                Get in touch
              </div>
          </Button>
          <Button variant="text" id='faq-button'
            onClick={() => {
              const element = document.querySelector("#contact");
              element.scrollIntoView({
                behavior: "smooth"
              })}}>
              <div id='work-text'>
                FAQ
              </div>
          </Button>
          </div>
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
