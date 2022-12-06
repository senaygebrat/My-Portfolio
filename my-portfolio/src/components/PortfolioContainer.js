import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './Footer';

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio'){
      return <Portfolio />;
    }
    if (currentPage === 'Resume'){
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);


return (
  <div>
    <div>
      {/* <img className='movie' src={banner}/> */}
    </div>
    <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
    <Footer/>
  </div>
  );
}

export default PortfolioContainer;