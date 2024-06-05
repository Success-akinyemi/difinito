import './Gallery.css'
import Navbar from '../../Components/Navbar/Navbar'
import { gallery } from '../../data/gallery'
import Footer from '../../Components/Footer/Footer'
import ImgBg from '../../assets/aidi.png'
import { useState } from 'react'

function Gallery() {
      const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(gallery.length / itemsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = gallery.slice(offset, offset + itemsPerPage);

  return (
    <div className='gallery'>
        <Navbar enableScrollEffect={true} />
        <div className="aboutHero">
            <div className="overlay"></div>
            <img src={ImgBg} alt='background' />
            <div className="content">
                <h1>Gallery</h1>
                <p>A thousand words from our image...</p>
            </div>
        </div>

        <div className="team">
          <div className="top">
            Photo Book
          </div>

          <div className='teamMembers'>
            {
              currentPageData.map((item, idx) => (
                <div key={idx} className="teamCard">
                    <div className="overlay">{item?.info}</div>
                  <img src={item?.img} alt={item?.name} />
                  <div className="info">
                    <div className="name">{item?.name}</div>
                    <div className="role">{}</div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 0}>
            Previous
          </button>
          <span>Page {currentPage + 1} of {Math.ceil(gallery.length / itemsPerPage)}</span>
          <button onClick={handleNextPage} disabled={currentPage === Math.ceil(gallery.length / itemsPerPage) - 1}>
            Next
          </button>
        </div>
        </div>

        <Footer />
    </div>
  )
}

export default Gallery