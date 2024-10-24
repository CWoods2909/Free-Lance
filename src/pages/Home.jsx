import * as React from 'react';
import  Button  from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import '../styles/Home.css';
import { Link } from 'react-router-dom';


export default function Home() {

    return (
      <>
      {/* <div id='main-home'> */}
        <Container maxWidth="xl" sx={{
        display: 'flex',
        justifyContent: 'center',  // Vertically center
        alignItems: 'center', // Add this for vertical centering
        minHeight: '100vh',        // Take full viewport height
      }}>
        <Grid container spacing={2} alignItems='center' // Add this for vertical centering
        >
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          {/* <div id="left-column-components"> */}
            <div id="company-name">
              <h1 id='company-h1'>Coast to Coast<br></br> Web Design</h1>
              <hr id='home-line'></hr>
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
                <div id='work-text'>
                  Get in touch
                </div>
            </Button>
            <Button variant="text" id='faq-button'
              onClick={() => {
                const element = document.querySelector("#faq");
                element.scrollIntoView({
                  behavior: "smooth"
                })}}>
                <div id='work-text'>
                  FAQ
                </div>
            </Button>
            </div>
          {/* </div> */}
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            {/* <div id="right-column-components"> */}
              <div id="group-image">
                <img src="/images/new-image-2.png" alt="group working" style={{height: "100%", width:"100%" }}/>
              </div>
            {/* </div> */}
          </Grid>
        </Grid>
      {/* </div> */}
      </Container>
      <div className="bubble_logo">
        <div className="arrow_down expand_menu">
        <p>Scroll</p>
            <i className="fa-solid fa-angles-down"></i>
        </div>
      </div>
      </>
    )
  }
