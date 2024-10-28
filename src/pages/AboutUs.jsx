import AboutUsCard from "../components/AboutUsCard";
import "../styles/AboutUs.css";
import { user } from "../data/userObj";
import Navbar from '../components/Navbar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

export default function AboutUs() {
    return (
      <>
        <Navbar />
        <div id="about-us-header">
          <p>Meet the Team</p>
        </div>
        <Container maxWidth="xl" sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        minWidth: '80vw',
      }}>
          <Grid container spacing={6}>
              {user.map(person => {
                return (
                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }} key={person.firstName}>
                    <AboutUsCard person={person}/>
                </Grid>)
              })}
          </Grid>
        </Container>
      </>
    )
  }
