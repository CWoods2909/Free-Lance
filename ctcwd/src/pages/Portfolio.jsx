import PortfolioCard from '../components/PortfolioCard';
import '../styles/Portfolio.css';

export default function Portfolio() {
    return (
      <div className='page_container'>
        <div className='portfolio_header'>
          <h1>Portfolio</h1>
        </div>
        <PortfolioCard/>
      </div>
    )
  }