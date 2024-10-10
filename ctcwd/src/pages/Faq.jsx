import FaqAccordian from "../components/FaqAccordian"
import Navbar from "../components/Navbar"

export default function Faq() {
    return (
      <>
        <Navbar/>
        <div id="FAQ-header">
            <p>Frequently Asked Questions</p>
        </div>
        <div id="faq-container">
            <FaqAccordian/>
        </div>
      </>
    )
  }