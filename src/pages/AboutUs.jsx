import AboutUsCard from "../components/AboutUsCard";
import "../styles/AboutUs.css";
import { user } from "../data/userObj";
import Navbar from '../components/Navbar'

export default function AboutUs() {
    return (
      <>
        <Navbar />
        <div id="about-us-header">
          <p>Meet the Team</p>
        </div>
        <div id="aboutUsContainer">
          {user.map(person => {
            return <div className="about-us-card" key={person.firstName}>
              <AboutUsCard person={person}/>
              </div>
          })}
          </div>
      </>
    )
  }
