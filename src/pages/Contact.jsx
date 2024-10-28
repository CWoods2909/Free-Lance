import "../styles/Contact.css"
import Navbar from '../components/Navbar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

export default function Contact() {
    return (
      <>
        <Navbar />
        <Container maxWidth="xl" sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        minWidth: '50vw',
        maxWidth: '70vw'
      }}>
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <div id="page-header">
              <p>Project</p>
              <p>Inquiries</p>
            </div>
            <hr id="contact-line"></hr>
            {/* <div id="contact-container"> */}
              <p id="contact-text">
                We would love to learn about your brand's goals and objectives to ensure
                we are a good fit. Email us today at fakeEmail@fake.com
              </p>
            {/* </div> */}
            </Grid>
          </Grid>
        </Container>
      </>
    )
  }
