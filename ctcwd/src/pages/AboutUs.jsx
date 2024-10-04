import AboutUsCard from "../components/AboutUsCard";
import "../styles/AboutUs.css";
import { user } from "../data/userObj";
import Navbar from '../components/Navbar'

export default function AboutUs() {
    return (
      <>
        <Navbar />
        <div id="about-us-header">
          <h2>Meet the Team</h2>
        </div>
        <div id="aboutUsContainer">
          {user.map(person => {
            return <div className="about-us-card">
              <AboutUsCard person={person}/>
              </div>
          })}
          </div>
      </>
    )
  }
