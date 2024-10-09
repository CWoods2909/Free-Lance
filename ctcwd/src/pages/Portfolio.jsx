import PortfolioCard from '../components/PortfolioCard';
import '../styles/Portfolio.css';
import Navbar from '../components/Navbar'
import { portfolio } from '../data/portfolioData';

export default function Portfolio() {
    return (
      <>
        <Navbar />
        <div id='page_container'>
          <div id='portfolio_header'>
            <p>Portfolio</p>
          </div>
          <div id='portfolio-container'>
          {portfolio.map(site => {
            return <div id="portfolio-card">
              <PortfolioCard site={site}/>
              </div>
          })}
          </div>
        </div>
      </>
    )
  }
