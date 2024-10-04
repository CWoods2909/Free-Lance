import PortfolioCard from '../components/PortfolioCard';
import '../styles/Portfolio.css';
import Navbar from '../components/Navbar'

export default function Portfolio() {
    return (
      <>
        <Navbar />
        <div className='page_container'>
          <div className='portfolio_header'>
            <h1>Portfolio</h1>
          </div>
          <PortfolioCard/>
        </div>
      </>
    )
  }
