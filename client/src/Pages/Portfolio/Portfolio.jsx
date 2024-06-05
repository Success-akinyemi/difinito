import { useState } from 'react';
import './Portfolio.css'
import { portfolio } from '../../data/portfolio';
import ImgBg from '../../assets/aidi.png'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { FiExternalLink } from "react-icons/fi";

function Portfolio() {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;
  
    const handlePreviousPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNextPage = () => {
      if (currentPage < Math.ceil(portfolio?.length / itemsPerPage) - 1) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const offset = currentPage * itemsPerPage;
    const currentPageData = portfolio?.slice(offset, offset + itemsPerPage);

  return (
    <div className='portfolio'>
        <Navbar enableScrollEffect={true} />
        <div className="aboutHero">
            <div className="overlay"></div>
            <img src={ImgBg} alt='background' />
            <div className="content">
                <h1>Portfolio</h1>
                <p>A cue to our existing project</p>
            </div>
        </div>

        <div className="team">
          <div className="top">
            Projects handled
          </div>

          <div className='teamMembers'>
            {
              currentPageData.map((item, idx) => (
                <div key={idx} className="teamCard">
                    <div className="overlay">
                      <h3>Project Overview</h3>
                      <p>{item?.info}</p>
                    </div>
                  <img src={item?.img} alt={item?.name} />
                  <div className="info">
                    <div className="name">{item?.name}</div>
                    <div className="role"><a target='_blank' href={item?.link}><FiExternalLink />Visit</a></div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 0}>
            Previous
          </button>
          <span>Page {currentPage + 1} of {Math.ceil(portfolio?.length / itemsPerPage)}</span>
          <button onClick={handleNextPage} disabled={currentPage === Math.ceil(portfolio?.length / itemsPerPage) - 1}>
            Next
          </button>
        </div>
        </div>

        <Footer />
    </div>
  )
}

export default Portfolio