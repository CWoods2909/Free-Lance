import AboutUsCard from "../components/AboutUsCard";
import "../styles/AboutUs.css";
import { user } from "../data/userObj";

export default function AboutUs() {
    return (
      <>
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